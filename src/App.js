import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Todo</h1> 
        </div>
        
      </header>
      <main>
          <div className="container">
          <form>
            <input type="text" placeholder="Create a new todo..."/>
          </form>
          </div>
      </main>
    </div>
  );
}

export default App;
