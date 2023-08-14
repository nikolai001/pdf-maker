import '../assets/scss/editor.scss'
import Toolbar from './toolbar';

export default function Editor() {
    return (
      <div className="editor">
        <Toolbar />
        <article className='editor__document'>
            {/* <h1 className='document__test' style={{ fontFamily: currentFont }}>Im a test</h1> */}
        </article>
      </div>
    );
  }