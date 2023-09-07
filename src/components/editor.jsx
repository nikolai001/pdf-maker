import { useState } from 'react';
import '../assets/scss/editor.scss'
import Toolbar from './toolbar';

export default function Editor() {

    const [font, setFont] = useState('');

    const [action, setAction] = useState('Select');

    const [fillColor,setFill] = useState('#000')

    const [borderColor,setBorder] = useState('#000')

    const handleFont = (font) => {
      setFont(font);
    };

    const handleAction = (action) => {
        setAction(action);
      };

    const setFillColor = (FillColor) => {
      setFill(FillColor)
    }

    const setBorderColor = (BorderColor) => {
      setBorder(BorderColor)
    }
  
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
            newShape.style.backgroundColor = fillColor
            newShape.style.borderWidth = '1px'
            newShape.style.borderStyle = 'solid'
            newShape.style.borderColor = borderColor
        }else if (action === "Text") {
            let newText = document.createElement("textarea");
            newText.classList.add("document__element");
            createElement(event,newText)
        }
    }

    return (
      <div className="editor">
        <Toolbar receivedData={handleFont} action={handleAction} BorderColor={setBorderColor} FillColor={setFillColor}/>
        <article className='editor__document' onClick={(e) => clickDocument(action, e)}>
          <div className='document__canvas'>
            
          </div>
            {/* <h1 className='document__test' style={{ fontFamily: font }}>Im a test</h1> */}
        </article>
      </div>
    );
  }