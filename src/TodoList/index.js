import React from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const items = [
    'Read for 1 Hour',
    'Pick up groceries',
    '10 minutes of meditation'
]

const checklist = items.map((todoItem, index) => {
    return <TodoListItem key={index} item={todoItem}></TodoListItem>
})
const TodoList = () => {
    return (
        <ul className={styles["list"]}>
            {checklist}
            <li className={styles["list__controls"]}>
                <div className={styles["list__items-left"]}>5 items left</div>
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