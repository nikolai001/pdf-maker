import '../assets/scss/toolbar.scss'
import React, { useState } from 'react';

export default function Toolbar() {

    const [currentTool, setCurrentTool] = useState('')

    const clickedTool = (tool) => {
        if (!currentTool || currentTool === tool) {
            setCurrentTool(tool)
            return
        }
        setCurrentTool(tool)
      }; 
    return (
      <div className="toolbar">
        <button className={`material-symbols-outlined toolbar__icon ${currentTool === "Pan" ? 'toolbar__icon--active' : ''}`} onClick={(e) => clickedTool(e.target.value)} value={'Pan'}>pan_tool</button>
        <button className={`material-symbols-outlined toolbar__icon ${currentTool === "Select" ? 'toolbar__icon--active' : ''}`} onClick={(e) => clickedTool(e.target.value)} value={'Select'}>arrow_selector_tool</button>
        <button className={`material-symbols-outlined toolbar__icon ${currentTool === "Shapes" ? 'toolbar__icon--active' : ''}`} onClick={(e) => clickedTool(e.target.value)} value={'Shapes'}>check_box_outline_blank</button>
        <button className={`material-symbols-outlined toolbar__icon ${currentTool === "Text" ? 'toolbar__icon--active' : ''}`} onClick={(e) => clickedTool(e.target.value)} value={'Text'}>title</button>
        <button className="material-symbols-outlined toolbar__icon">palette</button>
        <select className="toolbar__dropdown">
            <option>Montserrat</option>
        </select>
        <button className="material-symbols-outlined toolbar__icon">format_align_left</button>
        <button className="material-symbols-outlined toolbar__icon">format_align_center</button>
        <button className="material-symbols-outlined toolbar__icon">format_align_right</button>
        <button className="material-symbols-outlined toolbar__icon">more_horiz</button>
        <button className="material-symbols-outlined toolbar__icon">download</button>
        <button className="material-symbols-outlined toolbar__icon">print</button>
      </div>
    );
  }