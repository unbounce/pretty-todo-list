import React, {useState} from "react";
import TodoListItem from '../TodoListItem';
import styles from './TodoList.module.scss';

const TodoList = () => {

    const [listOfItems, setListOfItems] = useState([
        {description: 'Read for 1 Hour', completed: false},
        {description: '10 minutes of meditation', completed: true},
        {description: 'Go for a jog', completed: false}
    ])

    const checklist = listOfItems.map((todoItem, index) => {
        return <TodoListItem key={index} item={todoItem.description} isCompleted={todoItem.completed}></TodoListItem>
    })
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