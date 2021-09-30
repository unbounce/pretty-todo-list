import moon from './icon-moon.svg';
import './App.scss';
import TodoList from './TodoList';
function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container header__container">
          <h1>Todo</h1> 
          <img src={moon} alt="moon"></img>
        </div>
        
      </header>
      <main>
          <div className="container">
            <form>
              <input type="text" placeholder="Create a new todo..."/>
            </form>

            <TodoList></TodoList>
          </div>
      </main>
    </div>
  );
}

export default App;
