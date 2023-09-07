import { useState } from 'react';
import '../assets/scss/palette.scss'

export default function Palette({Border,Fill}) {

    const [borderColor, setBorderColor] = useState('#000');

    const [fillColour, setFillColor] = useState('#000');

    const [storedFillColor, setStoredFillColor] = useState('#000')

    const [storedBorderColor, setStoredBorderColor] = useState('#000')

    const [currentColorType, setColorType] = useState(true)

    const selectColor = (event) => {
        if (!currentColorType) {
            setStoredFillColor(event.target.value)
            Fill(event.target.value)
            return
        }
        setStoredBorderColor(event.target.value)
        Border(event.target.value)
        return
    }

    const colortypeToggle = () => {
        setColorType(!currentColorType)
    }

    return (
      <div className="palette">
        {/* {storedBorderColor + storedFillColor} */}
        <div className="palette__type">
            <button className="type__button" onClick={() => colortypeToggle()}>
                <span className={`button__switch ${currentColorType ? 'button__switch--active' : ''}`}>Border</span> / <span className={`button__switch ${!currentColorType ? 'button__switch--active' : ''}`}>Fill</span>
            </button>
        </div>
        <div className="palette__colors">
            <button value={'red'} className='colors__swatch colors__swatch--red' onClick={(e) => selectColor(e)}></button>
            <button value={'green'} className='colors__swatch colors__swatch--green' onClick={(e) => selectColor(e)}></button>
            <button value={'yellow'} className='colors__swatch colors__swatch--yellow' onClick={(e) => selectColor(e)}></button>
            <button value={'blue'} className='colors__swatch colors__swatch--blue' onClick={(e) => selectColor(e)}></button>
            <button value={'white'} className='colors__swatch colors__swatch--white' onClick={(e) => selectColor(e)}></button>
            <button value={'black'} className='colors__swatch colors__swatch--black' onClick={(e) => selectColor(e)}></button>
        </div>
      </div>
    );
  }