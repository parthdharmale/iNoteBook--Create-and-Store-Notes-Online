import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

const AddNote = ({ username }) => {
  const context = useContext(noteContext);
  const { addSharedNote ,addNote } = context;
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
    shareduser: "",
  });
  // const onEditorChange = (editorState) => {
  //   setEditorState(editorState);
  //   setNote({ ...note, description: editorState.getCurrentContent().getPlainText() });
  //   // onChange();
  // };
  const handleSharedClick = (e) =>{
    e.preventDefault();

    if (!note.title || !note.description) {
      window.alert("Please enter values for title and description");
    } else {
      addSharedNote(note.shareduser, note.title, note.description, note.tag);
      //   window.alert("Note Added Succesfully");
    }

    setNote({
      title: "",
      description: "",
      tag: "",
      shareduser: "",
    });
  }
  const handleClick = (e) => {
    e.preventDefault();

    if (!note.title || !note.description) {
      window.alert("Please enter values for title and description");
    } else {
      addNote(note.title, note.description, note.tag);
      //   window.alert("Note Added Succesfully");
    }

    setNote({
      title: "",
      description: "",
      tag: "",
      shareduser: "",
    });
  };
  username = username.charAt(0).toUpperCase() + username.slice(1).toLowerCase();
  const onChange = (event) => {
    console.log(username);
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  return (
    <div>
      {/* <MyEditor/> */}
      <div className="container my-3">
        {/* <h1> Hello {name}</h1> */}
        <h1>Hi {username} ! Add a Note</h1>
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
              value={note.title}
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
              value={note.description}
              onChange={onChange}
            />
            {/* <Editor
              editorState={editorState}
              onEditorStateChange={onEditorChange}
              name="description"
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Share Note With
            </label>
            <input
              type="text"
              className="form-control"
              id="shareduser"
              name="shareduser"
              value={note.shareduser}
              onChange={onChange}
              placeholder="Leave Blank if  you don't want to share the note."
            />
          </div>
            {!note.shareduser&&  <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button> }
          {/* <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button> */}
          {note.shareduser && <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary "
            onClick={handleSharedClick}
          >
            Add Shared Note
          </button>}
        </form>


      </div>
    </div>
  );
};

export default AddNote;
