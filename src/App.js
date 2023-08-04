import './assets/scss/home.scss'

function App() {
  return (
    <div className="App">
        <main className="App__home">
          <div className='home__buttons'>
            <button className="buttons__CTA buttons__CTA--primary">Create PDF</button>
            <button className="buttons__CTA buttons__CTA--secondary">Import existing PDF</button>
          </div>
        </main>
    </div>
  );
}

export default App;
