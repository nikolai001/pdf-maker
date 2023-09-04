import { useState } from 'react';
import '../assets/scss/palette.scss'

export default function Palette() {

    const [borderColor, setBorderColor] = useState('#000');

    const [fillColour, setFillColor] = useState('#000');

    const [storedFillColor, setStoredFillColor] = useState('#000')

    const [storedBorderColor, setStoredBorderColor] = useState('#000')

    const selectColor = (action, event) => {
        // console.log(action)
    }

    return (
      <div className="palette">
        <button className='palette__color palette__color--red'></button>
        <button className='palette__color palette__color--green'></button>
        <button className='palette__color palette__color--yellow'></button>
        <button className='palette__color palette__color--blue'></button>
        <button className='palette__color palette__color--white'></button>
        <button className='palette__color palette__color--black'></button>
      </div>
    );
  }