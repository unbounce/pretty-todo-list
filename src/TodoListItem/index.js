import React, { useState } from 'react';
import styles from './TodoListItem.module.scss';
import checkIcon from '../assets/images/icon-check.svg'
function TodoListItem({item, isCompleted, onChange, index}) {
    
    return ( 
            <li className={styles["list-item"]}>
                <input type="checkbox" onChange={() => onChange(index)} checked={isCompleted ? 'checked' : ''} className={styles["list-item__checkbox"]} name="item-completed" value={item} />
                    <img className={styles["check-icon"]} src={checkIcon}></img>
                    <span>{item}</span>
            </li> 
        );
}

export default TodoListItem;