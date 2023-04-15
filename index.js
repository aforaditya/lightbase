const fs = require('fs')

function get(key){
    let data = ''
try{
     data = fs.readFileSync('data.txt', 'utf-8')
    }
    catch{
    console.error('DATABASE IS EMPTY!');
    fs.writeFileSync('data.txt', '')
    }
    let pairs = data.split('\n').slice(0, -1)
    let val

    pairs.forEach(pair=>{
        pair = pair.split('<%#>');
        if(pair[0]==key)
        val = pair[1]
    })

    return val
}

function contains(key){
    let lines = []
    try{       
    lines = fs.readFileSync('data.txt', 'utf-8').split('\n').slice(0, -1)
       }
       catch{
    console.error('DATABASE IS EMPTY!');
    fs.writeFileSync('data.txt', '')
       }
   for(let i=0; i<lines.length; i++){
        if(lines[i].split('<%#>')[0]==key)
        return true
   }

   return false
}

function getPosition(key){
    let lines = []
    try{
     lines = fs.readFileSync('data.txt', 'utf-8').split('\n').slice(0, -1)
    }
    catch{
    console.error('DATABASE IS EMPTY!');
    fs.writeFileSync('data.txt', '')
    }
    for(let i=0; i<lines.length; i++){
         if(lines[i].split('<%#>')[0]==key)
         return i
    }
 
    return -1
 }

function store(key, value){
    if(contains(key))
    update(key, value)
    else
    fs.appendFileSync('data.txt', `${key}<%#>${value}\n`)
}

function writeDatabase(rows=[]){

    fs.writeFileSync('data.txt', '')
    rows.forEach(row=>{
        fs.appendFileSync('data.txt', row+'\n')
    })
}

function update(key, value){
    let data
    try{
    data = fs.readFileSync('data.txt', 'utf-8')
    fs.writeFileSync('data.txt', '')
        }
    catch{
    console.error('DATABASE IS EMPTY!');
        }
    let pairs = data.split('\n').slice(0, -1)
    let pos = -1
    for(let i=0; i<pairs.length; i++){
        let pair = pairs[i].split('<%#>')
        if(pair[0] == key){
            pos = i
            break
        }
    }

    if(pos!=-1){
        np1 = pairs.slice(0, pos)
        np1.push(`${key}<%#>${value}`)
        np2 = pairs.slice(pos+1)
        np3 = np1.concat(np2)
        writeDatabase(np3)
    }

}

function clear(){
    writeDatabase()
}

function remove(key){
    let idx = getPosition(key)
    if(idx==-1)
    return
    let lines
    try{
     lines = fs.readFileSync('data.txt', 'utf-8').split('\n').slice(0, -1)
    }
    catch{
        console.error('DATABASE IS EMPTY!');
        fs.writeFileSync('data.txt', '')
    }
    let p1 = lines.slice(0, idx)
    let p2 = lines.slice(idx+1)
    let p3 = p1.concat(p2)
    writeDatabase(p3)
}


module.exports = {store, get, update, remove, clear}