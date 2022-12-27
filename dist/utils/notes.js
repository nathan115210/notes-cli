"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNote = exports.addNote = exports.listNotes = void 0;
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
const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
};
const listNotes = () => {
    const notes = loadNotes();
    if (notes.length) {
        console.log(...notes);
    }
    else {
        console.log("No notes");
    }
};
exports.listNotes = listNotes;
const addNote = ({ title, body }) => {
    console.log("hhh");
    const notes = loadNotes();
    const duplicatedNotes = notes.filter((note) => note.title === title);
    if (duplicatedNotes.length === 0) {
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
const removeNote = (targetTitle) => {
    const notes = loadNotes();
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
