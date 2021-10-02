import moon from './icon-moon.svg';
import './App.scss';
import TodoList from './TodoList';
import { useState } from 'react';
function App() {

  const [listOfItems, setListOfItems] = useState([
    {description: 'Read for 1 Hour', completed: false},
    {description: '10 minutes of meditation', completed: false},
    {description: 'Go for a jog', completed: false}
  ])

  const [newTodoItem, setNewTodoItem] = useState('');

  const handleUpdateCompleted = (index) => {
        console.log("Updating", index)
    const newList = listOfItems;
    newList[index].completed = !newList[index].completed;
    setListOfItems(newList);
  }

  const handleAddNewItem = () => {
    const newItem = {description: newTodoItem, completed: false};
    setListOfItems([newItem, ...listOfItems]);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddNewItem();
    setNewTodoItem('');
  }

  const handleClearCompleted = (filterType) => {
    const newList = listOfItems.filter((item) => !item.completed);
    setListOfItems(newList);
  }

  const handleDeleteItem = (index) => { 
    console.log(index)
    const newList = listOfItems.filter((item, i) => i !== index);
    setListOfItems(newList);
  }


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
            <form onSubmit={(e) => handleFormSubmit(e)}>
              <input onChange={(e) => setNewTodoItem(e.target.value)} type="text" value={newTodoItem} placeholder="Create a new todo..."/>
            </form>
            <TodoList 
              listOfItems={listOfItems} 
              handleUpdateCompleted={handleUpdateCompleted}
              handleClearCompleted={handleClearCompleted}
              handleDeleteItem={handleDeleteItem}
            ></TodoList>
            <div className="center-text description">Drag and drop to reorder list</div>
          </div>
      </main>
    </div>
  );
}

export default App;
