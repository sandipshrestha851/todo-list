import React, { useState, useContext } from 'react'
import { CompletedTasks } from './App.jsx'
import styles from './Completed.module.css'
import tick from './assets/tick.svg'

function Completed() {

    const { tasksCompleted, setTasksCompleted } = useContext(CompletedTasks);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div>
            <h1 className={styles.CompletedTitle}>Completed Tasks</h1>
            <ol className={styles.taskContainer}>
                {tasksCompleted.map((task, index) =>{
                     const monthName = months[Number(task.time.split("-")[1]) - 1];
                    const year = task.time.split("-")[0];
                    const day = task.time.split("-")[2];
                    return (
                        <li key={index}>
                            <div className={styles.upperDisplay}>
                                <p className={styles.date}>{`${day} ${monthName}`} &#183; {`${year}`}</p>
                            </div>
                            <div className={styles.lowerDisplay}>
                                <img src={tick} />
                                <p className={styles.title}>{task.job}</p>
                            </div>
                            {/* <p className={styles.description}>{task.about}</p> */}
                        </li>
                    )}
                )}
            </ol>
        </div>
    )
}
export default Completed;