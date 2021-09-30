import React, { useState } from 'react';
import styles from './TodoListItem.module.scss';
function TodoListItem({item}) {
    return ( 
            <li>
                <input type="checkbox" name="item-completed" value={item} />{item}
            </li> 
        );
}

export default TodoListItem;