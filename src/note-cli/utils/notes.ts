const fs = require("fs");
import { Note } from "./types";
import * as chalk from "chalk";

const loadNotes = (): Note[] => {
  try {
    const data: string = fs.readFileSync("notes.json", {
      encoding: "utf8",
    });
    return JSON.parse(data) as Note[];
  } catch (err) {
    return [];
  }
};

const notes = loadNotes();

const saveNotes = (notes: Note[]) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

export const listNotes = () => {
  if (notes.length) {
    console.log(chalk.inverse("Your notes"));
    notes.forEach((note) => {
      console.log(note.title);
    });
  } else {
    console.log("No notes");
  }
};

export const addNote = ({ title, body }: Note) => {
  const duplicateNote: Note | undefined =
    notes.find((item) => item.title === title) || undefined;

  if (!duplicateNote) {
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

export const readNote = (title: string) => {
  const targetNote: Note | undefined =
    notes.find((item) => item?.title && item.title === title) || undefined;

  if (targetNote) {
    console.log(chalk.inverse("Title:" + targetNote.title));
    console.log("Body:" + targetNote.body);
  } else {
    console.log(chalk.red.inverse(`No Note with ${title} has found`));
  }
};

export const removeNote = (targetTitle: string) => {
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

/*
//TODO: - START

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
//TODO: - END
*/
