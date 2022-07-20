import React, {useState, } from 'react';
import JoditEditor from "jodit-react";

const JoditPrototype = ({placeholder}) => {
  const editorConfig = {
    useSearch: false,
    spellcheck: false,
    enter: "P",
    defaultMode: "1",
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    minHeight: 200,
    maxHeight: 500,
    minWidth: null,
    hotkeys: {
      redo: '',
      undo: '',
      indent: '',
      outdent: 'ctrl+[',
      bold: 'ctrl+b',
      italic: '-',
      removeFormat: 'ctrl+shift+m',
      insertOrderedList: 'ctrl+shift+7',
      insertUnorderedList: 'ctrl+shift+8',
      openSearchDialog: 'ctrl+f',
      openReplaceDialog: 'ctrl+r',
    },
    buttons:
      "bold,underline,ul,font,fontsize",
    editorCssClass: "alic",
    placeHolder: "",
    controls: {
      fontsize: {
        list: [
          "8",
          "9",
          "10",
          "11",
          "12",
          "14",
        ]
      },
      font: {
        command: "fontname",
        list: {
          "": "Default",
          "'Open Sans',sans-serif": "Open Sans",
          "Helvetica,sans-serif": "Helvetica",
          "Arial,Helvetica,sans-serif": "Arial",
          "Georgia,serif": "Georgia",
          "Impact,Charcoal,sans-serif": "Impact",
          "Tahoma,Geneva,sans-serif": "Tahoma",
          "'Times New Roman',Times,serif": "Times New Roman",
          "Verdana,Geneva,sans-serif": "Verdana"
        }
      }
    }
  };

  const [content, setContent] = useState('Test')

	return (
    <JoditEditor      
      value={content}
      config={editorConfig}
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {}}
    />
  );
}

export default JoditPrototype;