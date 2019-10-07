var yargs = require('yargs');
var fs = require('fs');
var notesU = require('./notesuti');
yargs.command({
    command: "add",
    describe: "adding a note",
    builder: {
        title:{
            describe: "Title of Note",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of Note',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function(argv){
        notesU.addNote(argv.title, argv.body);
    }
})
yargs.command({
    command: "remove",
    describe: "removing a note",
    builder: {
        title: {
            describe: "title of note",
            demandOption : true,
            type : 'string'
        }

    },
    handler:  function(argv){
        notesU.removeNote(argv.title);
    }
})

yargs.command({
    command: "list",
    description: "list the notes",
    handler: function(){
        console.log("This will list all the notes");
    }
})
yargs.parse();
