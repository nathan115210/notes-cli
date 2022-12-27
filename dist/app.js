"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const notes_1 = require("./utils/notes");
//Customize yargs version. Default[from yargs] is 1.0.0
yargs.version("1.1.0");
// Commands
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        const { title, body } = argv;
        (0, notes_1.addNote)({ title, body });
    },
});
// Remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: (argv) => {
        const { title } = argv;
        (0, notes_1.removeNote)(title);
    },
});
// Read command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: () => {
        console.log("Read");
    },
    /*builder: {
        title: {
          describe: "Note title",
          demandOption,
        },
      },*/
});
// List command
yargs.command({
    command: "list",
    describe: "Listing out all notes",
    handler: () => {
        (0, notes_1.listNotes)();
    },
    /*builder: {
        title: {
          describe: "Note title",
          demandOption,
        },
      },*/
});
yargs.parse();
