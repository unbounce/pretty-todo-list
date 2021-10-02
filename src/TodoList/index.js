import React, {useState} from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const TodoList = ({listOfItems, handleUpdateCompleted, handleClearCompleted, handleDeleteItem, handleFilterClick}) => {

    const [filter, setFilter] = useState('all'); 
    const getNumberOfItemsLeft = () => {
        return listOfItems.filter(item => !item.completed).length;
    }
    
    const handleFilterClick = (filter) =>{
        console.log('filter', filter)
        switch(filter) {
            case 'all':
                setFilter('all')
                break;
            case 'active':
                setFilter('active')
                break;
            case 'completed':
                setFilter('completed')
                break;
            default:
                setFilter('all')
          }
      }
    const checklist = listOfItems.map((todoItem, index) => {
        
        return (
            <TodoListItem 
                    item={todoItem.description} 
                    isCompleted={todoItem.completed} 
                    onChange={handleUpdateCompleted} 
                    onDelete={handleDeleteItem}
                    index={index} 
                    key={index} >
            </TodoListItem>
        )
    })

    return (
        <ul className={styles["list"]}>
            {checklist}
            <li className={styles["list__controls"]}>
                <div className={styles["list__items-left"]}>{getNumberOfItemsLeft()} items left</div>
                <div className={styles["list__filters"]}>
                    <p onClick={() => handleFilterClick('all')}>All</p>
                    <p onClick={() => handleFilterClick('active')} className={styles["list__filters-active"]}>Active</p>
                    <p onClick={() => handleFilterClick('completed')}>Completed</p>
                </div>
                <div onClick={handleClearCompleted} className={styles["list__clear-completed"]}>Clear Completed</div>
            </li>
        </ul>
    )
}

export default TodoList;