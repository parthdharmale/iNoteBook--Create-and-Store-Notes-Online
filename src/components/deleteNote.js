import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();

    if (!note.title || !note.description) {
      window.alert("Please enter values for title and description");
      
    } else {
      addNote(note.title, note.description, note.tag);
      window.alert("Note Added Succesfully");
      
    }
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className="my-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Your Note's Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
