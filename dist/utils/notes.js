"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNote = exports.readNote = exports.addNote = exports.listNotes = void 0;
const fs = require("fs");
const chalk = require("chalk");
const loadNotes = () => {
    try {
        const data = fs.readFileSync("notes.json", { encoding: "utf8" });
        return JSON.parse(data);
    }
    catch (err) {
        return [];
    }
};
const notes = loadNotes();
const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const listNotes = () => {
    if (notes.length) {
        console.log(chalk.inverse("Your notes"));
        notes.forEach((note) => {
            console.log(note.title);
        });
    }
    else {
        console.log("No notes");
    }
};
exports.listNotes = listNotes;
const addNote = ({ title, body }) => {
    const duplicateNote = notes.find((item) => item.title === title) || undefined;
    if (!duplicateNote) {
        notes.push({
            title,
            body,
        });
        saveNotes(notes);
        console.log("New note added!");
    }
    else {
        console.log("The note title taken!");
    }
};
exports.addNote = addNote;
const readNote = (title) => {
    const targetNote = notes.find((item) => (item === null || item === void 0 ? void 0 : item.title) && item.title === title) || undefined;
    if (targetNote) {
        console.log(chalk.inverse("Title:" + targetNote.title));
        console.log("Body:" + targetNote.body);
    }
    else {
        console.log(chalk.red.inverse(`No Note with ${title} has found`));
    }
};
exports.readNote = readNote;
const removeNote = (targetTitle) => {
    const updatedNotes = notes.filter((note) => note.title !== targetTitle);
    if (notes.length > updatedNotes.length) {
        saveNotes(updatedNotes);
        console.log(chalk.green.inverse(`The note with title: ${targetTitle}, removed!`));
    }
    else {
        console.log(chalk.red.inverse(`The note with title: ${targetTitle}, not found!`));
    }
};
exports.removeNote = removeNote;
/*
//TODO: ASK - START

interface Task {
  text: string;
  completed: boolean;
}

const tasks: { tasks: Task[]; getTasksToDo: () => string[] } = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    const todoTasks = this.tasks.filter((task) => !task.completed);
    return todoTasks.length
      ? todoTasks.forEach((item) => item.text) // ??: Problem: this return undefined. bt console works... why?
      : "No To-Do task";
  },
};

console.log(tasks.getTasksToDo());
//TODO: ASK - END
*/
