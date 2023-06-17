### Lightbase

This is a simple JavaScript module that acts as a basic database for storing, retrieving, and accessing text values. It utilizes the Node filesystem to interact with the file system and store the data in a text file.

### Installation

This module requires Node.js to run. To install the necessary dependencies, use the following command:

```bash
npm install lightbase
```

### Usage

To use this module, follow the steps below:

1. Import the module in your JavaScript file:

   ```javascript
   const db = require('lightbase');
   ```

2. Available Methods:

   - `db.store(key, value)`: Stores the provided `key` and `value` pair in the database. If the key already exists, it will update the existing value.

   - `db.get(key)`: Retrieves the value associated with the provided `key` from the database. If the key is not found, it will return `undefined`.

   - `db.update(key, value)`: Updates the value associated with the provided `key` in the database. If the key does not exist, it will do nothing.

   - `db.remove(key)`: Removes the entry with the provided `key` from the database. If the key is not found, it will do nothing.

   - `db.clear()`: Clears the entire database, removing all entries.

3. Examples:

   ```javascript
   // Store a value in the database
   db.store('name', 'John Doe');

   // Retrieve a value from the database
   const name = db.get('name');
   console.log(name); // Output: John Doe

   // Update a value in the database
   db.update('name', 'Jane Smith');

   // Remove a value from the database
   db.remove('name');

   // Clear the entire database
   db.clear();
   ```

### File Structure

The module manages the data internally using the "lightbase" package. You don't need to create or manage a separate data file.
