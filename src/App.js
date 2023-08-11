import './assets/scss/home.scss'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <main className="App__home">
          <div className='home__buttons'>
            <Link to={`/create/`} className="buttons__CTA buttons__CTA--primary">Create PDF</Link>
            <Link to={`/update/`} className="buttons__CTA buttons__CTA--secondary">Import existing PDF</Link>
          </div>
        </main>
    </div>
  );
}

export default App;
