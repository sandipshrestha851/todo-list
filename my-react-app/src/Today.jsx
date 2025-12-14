import React, { useState, useContext, useEffect } from 'react'
import { Tasks } from "./App.jsx"
import styles from './Today.module.css'
import CheckSound from './assets/check.mp3'
import { CompletedTasks } from './App.jsx'

function Today() {
    let audio = new Audio(CheckSound);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const { tasksCompleted, setTasksCompleted } = useContext(CompletedTasks);
    const { tasks, setTasks } = useContext(Tasks);
    const [todaysDate, setTodaysDate] = useState("");
    // const [todaysTask , setTodaysTask] = useState([]);

    function removeTasks(i) {
        audio.play();
        setTimeout(() => {
            const completed = tasks.filter((task, index) => index+task.job.replaceAll(" ", "_") == i);
            setTasksCompleted(prev => prev.concat(completed));
            setTasks(prevTasks => prevTasks.filter((task, index) => index+task.job.replaceAll(" ", "_") != i));
        }, 100)
    }

    useEffect(() => {
        const day = String(new Date().getDate()).padStart(2, "0");
        const month = String(new Date().getMonth() + 1).padStart(2, "0");
        const year = new Date().getFullYear();
        setTodaysDate(`${year}-${month}-${day}`);
    }, []);

    return (
        <div>
            <h1 className={styles.todayTitle}>Due Today Tasks</h1>

            <ol className={styles.taskContainer}>
                {tasks.map((task, index) => {
                    if (task.time === todaysDate) {
                        // setTodaysTask(prev =>prev.concat(task));
                        const [year, month, day] = task.time.split("-");
                        const monthName = months[Number(month) - 1];

                        return (
                            <li key={index+task.job.replaceAll(" ", "_")}>
                                <div className={styles.upperDisplay}>
                                    <p className={styles.date}>
                                        {`${day} ${monthName}`} &#183; {year}
                                    </p>
                                </div>

                                <div className={styles.lowerDisplay}>
                                    <input
                                        className={styles.tick}
                                        type="checkbox"
                                        onChange={() => removeTasks(index+task.job.replaceAll(" ", "_"))}
                                    />
                                    <p className={styles.title}>{task.job}</p>
                                </div>
                            </li>
                        );
                    }

                    return null;
                })}
            </ol>
        </div>
    );
}

export default Today;
