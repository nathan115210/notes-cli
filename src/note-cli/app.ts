import { ArgumentsCamelCase } from "yargs";

const yargs = require("yargs");
import { addNote, listNotes, removeNote, readNote } from "./utils/notes";
import { Note } from "./utils/types";

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
  handler: (argv: ArgumentsCamelCase<Note>) => {
    const { title, body } = argv;
    addNote({ title, body });
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
  handler: (argv: ArgumentsCamelCase<string>) => {
    const { title } = argv;
    removeNote(title as string);
  },
});

// Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv: ArgumentsCamelCase<string>) => {
    const { title } = argv;
    readNote(title as string);
  },
});

// List command
yargs.command({
  command: "list",
  describe: "Listing out all notes",
  handler: () => {
    listNotes();
  },
});
yargs.parse();
