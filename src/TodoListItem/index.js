import React, { useState } from 'react';
import styles from './TodoListItem.module.scss';
function TodoListItem({item}) {
    return ( 
            <li className={styles["list-item"]}>
                <input type="checkbox" className={styles["list-item__checkbox"]} name="item-completed" value={item} />{item}
            </li> 
        );
}

export default TodoListItem;