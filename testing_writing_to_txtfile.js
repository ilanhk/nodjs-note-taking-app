const fs = require('fs')
// to import a module you need to use the require function and type the module name as a string and save it as a variable.

 fs.writeFileSync('notes.txt', 'This file was created by Node.js! My name is Ilan')
// this would create a txt file with the name notes.txt and with this string as a note.

// fs.appendFileSync('notes.txt', ' This file was appeneded by Node.js! This is Ilan')
// appendFile Sync adds to the previsous string. run this code many times it will keep adding this string to the growing txt string.

