const fs = require("fs");
import { Note } from "./types";
import * as chalk from "chalk";

const loadNotes = (): Note[] => {
  try {
    const data: string = fs.readFileSync("notes.json", { encoding: "utf8" });
    return JSON.parse(data) as Note[];
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes: Note[]) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

export const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(...notes);
  } else {
    console.log("No notes");
  }
};

export const addNote = ({ title, body }: Note) => {
  console.log("hhh");
  const notes = loadNotes();
  const duplicatedNotes: Note[] = notes.filter((note) => note.title === title);
  if (duplicatedNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New note added!");
  } else {
    console.log("The note title taken!");
  }
};

export const removeNote = (targetTitle) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== targetTitle);
  if (notes.length > updatedNotes.length) {
    saveNotes(updatedNotes);
    console.log(
      chalk.green.inverse(`The note with title: ${targetTitle}, removed!`)
    );
  } else {
    console.log(
      chalk.red.inverse(`The note with title: ${targetTitle}, not found!`)
    );
  }
};
