import { useState } from 'react';
import '../assets/scss/editor.scss'
import Toolbar from './toolbar';

export default function Editor() {

    const [font, setFont] = useState('');

    const [action, setAction] = useState('Select');

    const handleFont = (font) => {
      setFont(font);
    };

    const handleAction = (action) => {
        setAction(action);
      };

    const clickDocument = (action, event) => {
        if ( action === "Shape") {
            let newShape = document.createElement("div");
            console.log(event.target)
            console.log(event.clientX)
            event.target.appendChild(newShape);
        }else if (action === "Text") {
            let newText = document.createElement("textarea");
            newText.classList.add("document__element");
            event.target.appendChild(newText);
            // console.log(newText.clientWidth)
            console.log(event.clientX-(newText.offsetWidth/2))
            newText.style.left = event.clientX +"px"
            newText.style.top = event.clientY +"px"
        }
    }

    return (
      <div className="editor">
        <Toolbar receivedData={handleFont} action={handleAction}/>
        <article className='editor__document' onClick={(e) => clickDocument(action, e)}>
            <h1 className='document__test' style={{ fontFamily: font }}>Im a test</h1>
        </article>
      </div>
    );
  }