import '../assets/scss/toolbar.scss'
import React, { useEffect, useState } from 'react';
import Palette from './palette';
const API_KEY = process.env.REACT_APP_API_KEY

export default function Toolbar({receivedData, action, BorderColor, FillColor}) {

    useEffect(() => {
        async function fetchFonts() {
            let data = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key='+API_KEY)
            data = await data.json();
          setFonts(data.items);
        }
        fetchFonts();
      }, []);

        const applyFont = (font) => {
      
          const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}&display=swap`;
          const style = document.createElement('link');
          style.href = fontUrl;
          style.rel = 'stylesheet';
          document.head.appendChild(style);
          receivedData(font)
        };

    const [currentTool, setCurrentTool] = useState('Select')

    const [fonts, setFonts] = useState([])

    const tools = [
        { value: 'Pan', icon: 'pan_tool', tip: 'Pan tool' },
        { value: 'Select', icon: 'arrow_selector_tool', tip: 'Select' },
        { value: 'Shape', icon: 'check_box_outline_blank', tip: 'Forms' },
        { value: 'Text', icon: 'title', tip: 'Text' },
    ]

    const properties = [
        {value: 'Align-left', icon: 'format_align_left', tip: 'Align left'},
        {value: 'Align-center', icon: 'format_align_center', tip: 'Align center'},
        {value: 'Align-right', icon: 'format_align_right', tip: 'Align right'},
    ]

    const color = [
        {value: 'Color', icon: 'palette', fill: '', stroke: '', tip: 'Color palette'},
    ]

    const extras = [
        {value: 'More', icon: 'more_horiz', tip: 'More'},
        {value: 'Download', icon: 'download', tip: 'Download document'},
        {value: 'Print', icon: 'print', tip: 'Print document'}
    ]

    const setFillColor = (Fill) => {
        color.fill = Fill
        FillColor(Fill)
      }
  
      const setBorderColor = (Border) => {
        color.stroke = Border
        BorderColor(Border)
      }

    const renderedPalette = () => {
        if (currentTool === "Color") {
            return <Palette Border={setBorderColor} Fill={setFillColor}/>
        }
        return null
    }

    const clickedTool = (tool) => {
        if (tool === "Text") {
            document.querySelector("*").style.cursor = "text"
        }else if (tool === "Pan") {
            document.querySelector("*").style.cursor = "grab"
        }else if (tool === "Select"){
            document.querySelector("*").style.cursor = "default"
        }else if (tool === "Shape"){
            document.querySelector("*").style.cursor = "cell"
        }else {
            document.querySelector("*").style.cursor = "auto"
        }
        if (!currentTool || currentTool === tool) {
            setCurrentTool(tool)
            action(tool)
            return
        }
        setCurrentTool(tool)
        action(tool)
        return
      }; 
    return (
      <div className="toolbar">
        <div>
        {renderedPalette()}
        </div>
        {tools.map((tool) => (
            <button key={tool.value} title={tool.tip} className={`material-symbols-outlined toolbar__icon ${currentTool === tool.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(tool.value)}>{tool.icon}</button>
        ))}
        {color.map((color) => (
            <button key={color.value} title={color.tip} className={`material-symbols-outlined toolbar__icon ${currentTool === color.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(color.value)}>{color.icon}</button>
        ))}
        <select className="toolbar__dropdown" onChange={(e) => applyFont(e.target.value)}>
            {fonts.map((font) => (
                <option key={font.family}>{font.family}</option>
            ))}
        </select>
        {properties.map((property) => (
            <button key={property.value} title={property.tip} className={`material-symbols-outlined toolbar__icon ${currentTool === property.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(property.value)}>{property.icon}</button>
        ))}
        {extras.map((feat) => (
            <button key={feat.value} title={feat.tip} className={`material-symbols-outlined toolbar__icon ${currentTool === feat.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(feat.value)}>{feat.icon}</button>
        ))}
      </div>
    );
  }