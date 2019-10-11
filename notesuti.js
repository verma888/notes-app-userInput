var fs = require('fs');

const getNotes = function(){
    return "Your notes are....";
}
const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })
    if(duplicateNotes.length==0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    console.log("New note added!");
    }
    else {
        console.log("Title already taken!")
    }
}

const saveNotes = function(notes){
    const DataJson = JSON.stringify(notes);
    fs.writeFileSync("n-1.json", DataJson);
}

const loadNotes = function(){
    try {
            const dataBuffer = fs.readFileSync('n-1.json');
            const JsonData = dataBuffer.toString();
            return JSON.parse(JsonData);
        } catch (e){
            return []
        }
}

const removeNote = function(title){
    const rnotes = loadNotes();
    const keepNotes = rnotes.filter(function(note){
        return note.title!==title;
    })
    saveNotes(keepNotes);
    console.log("title "+title + " has been removed!!");
}

module.exports= {
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
}