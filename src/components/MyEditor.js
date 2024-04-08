// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Editor, EditorState} from 'draft-js';
// import 'draft-js/dist/Draft.css';

// function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     () => EditorState.createEmpty(),
//   );

//   return <Editor editorState={editorState} onChange={setEditorState} />;
// }

// ReactDOM.render(<MyEditor />, document.getElementById('container'));

// import React from 'react';
// import { Editor, EditorState } from 'draft-js';
// import 'draft-js/dist/Draft.css';

// function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     () => EditorState.createEmpty(),
//   );

//   return <Editor editorState={editorState} onChange={setEditorState} />;
// }

// export default MyEditor;


import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';

function MyEditor() {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  
  return (
    <div className="App">
      <Editor
      editorState={editorState}
      onEditorStateChange={setEditorState}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      />
    </div>
  )
}

export default MyEditor;