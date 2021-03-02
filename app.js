// type ./filename for a file we want use
// const name2 = require('./utils.js') 
// const add = require('./utils.js')

const notes = require('./notes.js')

// for npm type the name of the module after you install it.
const validator = require('validator')
// validator validates stuff like to see if its a string or an email, URL ....etc

const chalk = require('chalk');
//  chalk allows you to hight and change the font of a string

const yargs = require('yargs'); //its a arguments parser 
const { demandOption, argv } = require('yargs');

// console.log(chalk.green.bold('Success!')); // doesnt matter the order after chalk it can be bold first then green etc
// console.log(chalk.red.inverse('Error!')); // inverse highlights

// console.log(validator.isEmail('ilan@example.com')) //this is true because its an email
// console.log(validator.isEmail('ilan')) //this is false because its not an email
// console.log(validator.isURL('https://www.linkedin.com/in/ilan-lieberman-9a1043132/')) //true
// console.log(validator.isURL('https/linkedi')) //false

const name1 = 'Ilan'

// console.log(name1)

// console.log(name2)

// const sum = add(2,-4)
// console.log(sum)



//Custom version
yargs.version('1.2.0')


//Add Command
yargs.command({
    command : 'add',
    discribe : 'adds a new note',
    builder : {
        title : {
            describe: 'Note Title',
            demandOption: true, // demandOption if set to true requires you fill it
            type : 'string',

        },
        body : {
            describe: 'The actual Note',
            demandOption: true, 
            type : 'string',
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Remove Command
yargs.command({
    command : 'remove',
    discribe : 'removes a note',
    builder : {
        title : {
            describe: 'Note Title',
            demandOption: true, // demandOption if set to true requires you fill it
            type : 'string',
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//List Command
yargs.command({
    command : 'list',
    discribe : 'list your notes',
    handler() {
        notes.listNotes()
    }
})

//Read Command
yargs.command({
    command : 'read',
    discribe : 'reads a note based on a title',
    builder : {
        title : {
            describe: 'Note Title',
            demandOption: true, // demandOption if set to true requires you fill it
            type : 'string',
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()