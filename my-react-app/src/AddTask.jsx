import TodoList from './TodoList.jsx'
import React, { useState } from 'react'
import add from './assets/add.svg'
import styles from './AddTask.module.css'

function AddTask() {

    const [show, setShow] = useState(false);

    function toggle() {
        if (show === false) {
            setShow(true);
        }
    }
    return (
        <div>
            <h1>Inbox</h1>
            <div className={styles.addButton}>
                {show == true ? <TodoList /> :
                    <div className={styles.btnDiv}>
                        <button className={styles.btn} onClick={toggle}><img src={add} /><span>Add Task</span></button>
                    </div>
                }

            </div>
        </div>
    )
}
export default AddTask;