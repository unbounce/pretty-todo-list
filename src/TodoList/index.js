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
        </ul>
    )
}

export default TodoList;