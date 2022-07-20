import React from 'react';
import { useState, useRef } from 'react';
import './DraftJsEditor.css'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'

function DraftJsEditor(props) {  
  const acceptableCommandsWithDefaults = props.acceptableCommands || ["bold", "underline"];

  const [editorState, setEditorState] = useState(EditorState.createEmpty());  
  const [editorContentHtml, setEditorContentHtml] = useState();
  const editorRef = useRef();

  const _onChange = (editorState) => {
    setEditorState(editorState);    
    props.onEditorChange(stateToHTML(editorState.getCurrentContent()));
  }
  
  const _handleKeyCommand = (command) => {
    if (acceptableCommandsWithDefaults.includes(command)) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      _onChange(newState);
      return true;
    } else {      
      return false;
    }    
  };

  const _toggleInlineStyle = (inlineStyle) => {
    _onChange(
      RichUtils.toggleInlineStyle(editorState, inlineStyle)
    );
  }

  const _outputOnClick = () => {
    let content = editorState.getCurrentContent();

    let htmlContent = setEditorContentHtml(stateToHTML(content));  
    console.log("The following text is the HTML output: ");    
    console.log(htmlContent); 
    props.onEditorChange(stateToHTML(content));
  }
   
  var INLINE_STYLES = [
    { label: "Bold", style: "BOLD" },
    { label: "Underline", style: "UNDERLINE" },    
  ];
    
  return (
    <div id="content">
      <h1>Draft.js Editor</h1>
      <button onClick={_outputOnClick}>GetOutput</button>
      <InlineStyleControls
          editorState={editorState}
          onToggle={_toggleInlineStyle}
          styles={INLINE_STYLES}
        />
      <div className="editor">      
        <Editor
          editorState={editorState} 
          onChange={_onChange}
          handleKeyCommand={_handleKeyCommand}
          editorRef={editorRef}
        />
      </div>
    </div>
  );
}

const StyleButton = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };
    
  let className = "RichEditor-styleButton";
  if (props.active) {
    className += " RichEditor-activeButton";
  }

  return (
    <span className={className} onMouseDown={onToggle}>
      {props.label}
    </span>
  );  
}

const InlineStyleControls = (props) => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {props.styles.map((type) => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default DraftJsEditor;