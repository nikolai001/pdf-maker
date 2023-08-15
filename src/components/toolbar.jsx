import '../assets/scss/toolbar.scss'
import React, { useEffect, useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY

export default function Toolbar({receivedData}) {

    useEffect(() => {
        async function fetchFonts() {
            let data = await fetch('https://www.googleapis.com/webfonts/v1/webfonts?key='+API_KEY)
            data = await data.json();
          setFonts(data.items);
        }
        fetchFonts();
      }, []);

        const applyFont = (font) => {
        //   setCurrentFont(font);
      
          const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(font)}&display=swap`;
          const style = document.createElement('link');
          style.href = fontUrl;
          style.rel = 'stylesheet';
          document.head.appendChild(style);
          receivedData(font)
        };

    const [currentTool, setCurrentTool] = useState('')

    const [fonts, setFonts] = useState([])

    // const [currentFont, setCurrentFont] = useState('')

    const tools = [
        { value: 'Pan', icon: 'pan_tool' },
        { value: 'Select', icon: 'arrow_selector_tool' },
        { value: 'Shape', icon: 'check_box_outline_blank' },
        { value: 'Text', icon: 'title' },
    ]

    const properties = [
        {value: 'Align-left', icon: 'format_align_left'},
        {value: 'Align-center', icon: 'format_align_center'},
        {value: 'Align-right', icon: 'format_align_right'},
    ]

    const color = [
        {value: 'Color', icon: 'palette', fill: '', stroke: ''},
    ]

    const extras = [
        {value: 'More', icon: 'more_horiz'},
        {value: 'Download', icon: 'download'},
        {value: 'Print', icon: 'print'}
    ]

    const clickedTool = (tool) => {
        if (!currentTool || currentTool === tool) {
            setCurrentTool(tool)
            return
        }
        setCurrentTool(tool)
      }; 
    return (
      <div className="toolbar">
        {tools.map((tool) => (
            <button key={tool.value} className={`material-symbols-outlined toolbar__icon ${currentTool === tool.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(tool.value)}>{tool.icon}</button>
        ))}
        {color.map((color) => (
            <button key={color.value} className={`material-symbols-outlined toolbar__icon ${currentTool === color.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(color.value)}>{color.icon}</button>
        ))}
        <select className="toolbar__dropdown" onChange={(e) => applyFont(e.target.value)}>
            {fonts.map((font) => (
                <option key={font.family}>{font.family}</option>
            ))}
        </select>
        {properties.map((property) => (
            <button key={property.value} className={`material-symbols-outlined toolbar__icon ${currentTool === property.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(property.value)}>{property.icon}</button>
        ))}
        {extras.map((feat) => (
            <button key={feat.value} className={`material-symbols-outlined toolbar__icon ${currentTool === feat.value ? 'toolbar__icon--active' : ''}`} onClick={() => clickedTool(feat.value)}>{feat.icon}</button>
        ))}
        {/* <h1 className='font__test' style={{ fontFamily: currentFont }}>Im a test</h1> */}
      </div>
    );
  }