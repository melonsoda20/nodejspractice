const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Teddy');

fs.appendFileSync('notes.txt', 'Test appending');