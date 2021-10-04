import React, {useEffect, useState} from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const TodoList = ({listOfItems, handleUpdateCompleted, handleClearCompleted, handleDeleteItem, theme}) => {

    const [filter, setFilter] = useState('all'); 
    const getNumberOfItemsLeft = () => {
        return listOfItems.filter(item => !item.completed).length;
    }
    const [filteredItems, setFilteredItems] = useState(listOfItems);

    useEffect(() => {
        // setFilter('all')
        setFilteredItems(listOfItems);
      }, []);

    const handleFilterClick = (filter) =>{
        
        switch(filter) {
            case 'all':
                setFilter('all')
                setFilteredItems(listOfItems)
                break;
            case 'active':
                setFilter('active');
               
                setFilteredItems(listOfItems.filter((item) => !item.completed))
                break;
            case 'completed':
                setFilter('completed');
                setFilteredItems(listOfItems.filter((item) => item.completed))
                break;
            default:
                setFilter('all')
          }
      }
    const renderFilteredList = () => {
        // let filteredList = listOfItems.filter((item) => !item.completed);
        let filteredList;
        if(filter === 'completed') {
            filteredList = listOfItems.filter((item) => item.completed)
        } else if(filter === 'active') {
            filteredList = listOfItems.filter((item) => !item.completed)
        } else {
            filteredList = listOfItems;
        }

        let checklist = filteredList.map((todoItem, index) => {
        
            return (
                <TodoListItem 
                        item={todoItem.description} 
                        isCompleted={todoItem.completed} 
                        onChange={handleUpdateCompleted} 
                        onDelete={handleDeleteItem}
                        index={index} 
                        key={index} 
                        theme={theme} >
                </TodoListItem>
            )
        })
        return checklist;
    }
    
    return (
        <ul className={styles["list"]}>

            {renderFilteredList()}
            {renderFilteredList().length === 0 &&
            <li className={styles["list__empty"]}>
                <span>Nothing on your to do list!</span>
            </li> 
            }
            <li className={theme === 'light' ? styles["list__controls"] : styles["list__controls-dark"]}>
                {getNumberOfItemsLeft() > 1 &&
                    <div className={styles["list__items-left"]}>{getNumberOfItemsLeft()} items left</div>
                }
                
                {getNumberOfItemsLeft() === 1 &&
                    <div className={styles["list__items-left"]}>{getNumberOfItemsLeft()} item left</div>
                }

                {getNumberOfItemsLeft() === 0 &&
                    <div className={styles["list__items-left"]}>No items left</div>
                }
                <div className={theme === 'light' ? styles["list__filters"] : styles["list__filters-dark"]}>
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