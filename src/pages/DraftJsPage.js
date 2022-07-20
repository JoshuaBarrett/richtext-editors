import React from 'react';
import { useState } from 'react';
import DraftJsEditor from '../components/DraftJsEditor'

function DraftJsPage(props) {  

  const [editorOutput, setEditorOutput] = useState();

  const onEditorChange = (data) => {
    setEditorOutput(data);
  }

  return (
    <div>
      <DraftJsEditor onEditorChange={onEditorChange}></DraftJsEditor>
      <span>{editorOutput}</span>
    </div>
  );
}

export default DraftJsPage;


