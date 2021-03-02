console.log('notes.js')

const fs = require('fs')
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = load_notes()
    // const duplicate_notes = notes.filter((note) => note.title === title) //this would go through the whole list while searching
    const duplicateNote = notes.find((note) => note.title === title) //this would find the first match

    // the '!' is for no so this if statement means 'if no duplicateNote'
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        save_notes(notes)
        console.log(chalk.green.inverse('New Note added!'))
    } else {
        console.log(chalk.red.inverse('Note Title already exists! Please make a new one'))
    }
}

const removeNote = (title) => {
    const notes = load_notes()
    const note_to_be_deleted = notes.filter((note) => note.title === title)
    if (note_to_be_deleted.length > 0) {
        const list_without_note = notes.filter((note) => note.title !== title)
        save_notes(list_without_note)
        console.log(chalk.green.inverse('Note Deleted!'))
        console.log(list_without_note)
    } else{
        console.log(chalk.red.inverse('Note doesnt exist!'))
        console.log(notes)
    }
}

const listNotes = () => {
    const notes = load_notes()
    console.log(chalk.inverse('Your Notes:'))
    
    notes.forEach((note) => {
        console.log(note.title)
    })
} 


const readNote = (title) => {
    const notes = load_notes()
    desired_note = notes.find((note) => note.title === title)

    if (desired_note) {
        console.log(chalk.inverse(desired_note.title))
        console.log(desired_note.body)

    } else {
        console.log(chalk.red.inverse('Note doesnt exist under that title'))
    }
}

const save_notes = (notes) => {
    dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const load_notes = () => {
    try{
        const data_buffer = fs.readFileSync('notes.json')
        const data_json = data_buffer.toString()
        return JSON.parse(data_json)
    } catch (e) {
        return []

    }


}



module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote, 
}

