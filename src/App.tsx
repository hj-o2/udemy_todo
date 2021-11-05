import React, { VFC, useState, useEffect } from "react";
import { FormControl, TextField } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

import "./App.css";
import { db } from "./firebase";

const App: VFC = () => {
  const [tasks, setTasks] = useState([{ id: "", title: "" }]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({ id: doc.id, title: doc.data().title }))
      );
    });
    return () => unSub();
  }, []);

  const newTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    db.collection("tasks").add({ title: input });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo App by React/FireBase</h1>
      <FormControl>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          label="New task?"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </FormControl>
      <button disabled={!input} onClick={newTask}>
        <AddToPhotosIcon />
      </button>

      {tasks.map((tasks) => (
        <h3 key={tasks.id}>{tasks.title}</h3>
      ))}
    </div>
  );
};

export default App;
