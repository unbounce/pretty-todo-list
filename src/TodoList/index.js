import React, {useState} from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const TodoList = ({listOfItems, handleUpdateCompleted}) => {

    const getNumberOfItemsLeft = () => {
        return listOfItems.filter(item => !item.completed).length;
    }

    const checklist = listOfItems.map((todoItem, index) => {
        console.log(todoItem)
        return <TodoListItem key={index} onChange={handleUpdateCompleted} index={index} item={todoItem.description} isCompleted={todoItem.completed}></TodoListItem>
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
                <div className={styles["list__clear-all"]}>Clear Completed</div>
            </li>
        </ul>
    )
}

export default TodoList;