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
  
    let parentWidth;
    let parentHeight;
    let mouseX;
    let mouseY;

    const clickDocument = (action, event) => {
        const createElement = (clicked, element) => {
          if (clicked.target.classList.contains('editor__document')) {
            clicked.target.appendChild(element)
            parentWidth = clicked.target.clientWidth;
            parentHeight = clicked.target.clientHeight;
            mouseX = event.clientX - clicked.target.getBoundingClientRect().left;
            mouseY = event.clientY - clicked.target.getBoundingClientRect().top;
            console.log('clicked parent',parentWidth,parentHeight,mouseX,mouseY)
          }else {
            clicked.target.parentNode.appendChild(element)
            parentWidth = clicked.target.parentNode.clientWidth;
            parentHeight = clicked.target.parentNode.clientHeight;
            mouseX = event.clientX - clicked.target.parentNode.getBoundingClientRect().left;
            mouseY = event.clientY - clicked.target.parentNode.getBoundingClientRect().top;
            console.log('clicked child',parentWidth,parentHeight,mouseX,mouseY)
          }
          const mouseXPercentage = (mouseX / parentWidth) * 100;
          const mouseYPercentage = (mouseY / parentHeight) * 100;
          console.log(mouseXPercentage,mouseYPercentage)
          element.style.left = mouseXPercentage +"%"
          element.style.top = mouseYPercentage +"%"
        }

        let mousePos = {X:event.clientX, Y:event.clientY}

        if ( action === "Shape") {
            let newShape = document.createElement("div");
            newShape.classList.add("document__element");
            createElement(event,newShape)
            newShape.style.width = '10%'
            newShape.style.aspectRatio = '1/1'
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
          <div className='document__canvas'>
            
          </div>
            {/* <h1 className='document__test' style={{ fontFamily: font }}>Im a test</h1> */}
        </article>
      </div>
    );
  }