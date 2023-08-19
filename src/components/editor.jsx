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
        const createElement = (clicked, element) => {
          console.log(clicked.target)
          if (clicked.target.classList.contains('editor__document')) {
            clicked.target.appendChild(element)
          }else {
            clicked.target.parentNode.appendChild(element)
          }
          element.style.left = mousePos.X +"px"
          element.style.top = mousePos.Y +"px"
        }
        let mousePos = {X:event.clientX, Y:event.clientY}
        if ( action === "Shape") {
            let newShape = document.createElement("div");
            newShape.classList.add("document__element");
            createElement(event,newShape)
            newShape.style.width = '50px'
            newShape.style.height = '50px'
            newShape.style.backgroundColor = '#000'
        }else if (action === "Text") {
            let newText = document.createElement("textarea");
            newText.classList.add("document__element");
            createElement(event,newText)
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