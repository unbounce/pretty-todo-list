import React, {useState} from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const TodoList = ({listOfItems, handleUpdateCompleted, handleClearCompleted, handleDeleteItem}) => {

    const getNumberOfItemsLeft = () => {
        return listOfItems.filter(item => !item.completed).length;
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
                    <p>All</p>
                    <p className={styles["list__filters-active"]}>Active</p>
                    <p>Completed</p>
                </div>
                <div onClick={handleClearCompleted} className={styles["list__clear-all"]}>Clear Completed</div>
            </li>
        </ul>
    )
}

export default TodoList;