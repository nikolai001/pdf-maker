import { useState } from 'react';
import '../assets/scss/editor.scss'
import Toolbar from './toolbar';

export default function Editor() {

    const [font, setFont] = useState('');

    const handleFont = (font) => {
      setFont(font);
    };

    return (
      <div className="editor">
        <Toolbar receivedData={handleFont}/>
        <article className='editor__document'>
            <h1 className='document__test' style={{ fontFamily: font }}>Im a test</h1>
        </article>
      </div>
    );
  }