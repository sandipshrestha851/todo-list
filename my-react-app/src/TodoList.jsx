import React, { useState, useContext, useEffect } from 'react'
import CheckSound from './assets/check.mp3'
import styles from './TodoList.module.css'
import { Tasks } from './App.jsx'
import { CompletedTasks } from './App.jsx'
// import Today from './Today.jsx'

function TodoList() {
    let audio = new Audio(CheckSound);
    audio.volume = 0.2;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const { tasks, setTasks } = useContext(Tasks);
    const { tasksCompleted, setTasksCompleted } = useContext(CompletedTasks);
    const [todaysDate, setTodaysDate] = useState("");

    function addTasks() {
        const newTask = { id: crypto.randomUUID(), job: title, about: description, time: date };
        setTasks(t => [...t, newTask]);

        setTitle("");
        setDescription("");
        setDate("");
    }

    function removeTasks(i) {
        audio.play();
        setTimeout(() => {
            const completed = tasks.filter((task, index) => index + task.job.replaceAll(" ", "_") == i)
            setTasksCompleted(prev => prev.concat(completed));
            setTasks(prevTasks => prevTasks.filter((task, index) => index + task.job.replaceAll(" ", "_") != i));
        }, 100);

        // clearInterval(intervalId);
    }

    function handleNewTitle(event) {
        setTitle(event.target.value);
    }

    function handleNewDescription(event) {
        setDescription(event.target.value);
    }

    function handleNewDate(event) {
        setDate(event.target.value);
    }

    useEffect(() => {
        const day = String(new Date().getDate()).padStart(2, "0");
        const month = String(new Date().getMonth() + 1).padStart(2, "0");
        const year = new Date().getFullYear();
        setTodaysDate(`${year}-${month}-${day}`);
    }, []);


    return (
        <div className={styles.Container}>
            <div>
                <ul>
                    {tasks.map((task, index) => {
                        if(task.time == ""){
                            task.time = todaysDate;
                        }
                        return (
                            <li key={index + task.job.replaceAll(" ", "_")}>
                                <div className={styles.upper}>
                                    <input className={styles.tick} type="checkbox" onChange={() => removeTasks(index + task.job.replaceAll(" ", "_"))} />
                                    <p className={styles.disTitle}>{task.job}</p>
                                </div>
                                <div className={styles.lower}>
                                    <p className={styles.disDescription}>{task.about}</p>
                                    <p className={styles.disDate}>{task.time}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.takeInputs}>
                <input className={styles.task} type="text" value={title} placeholder="Enter Task" onChange={handleNewTitle} />
                <textarea className={styles.description} value={description} placeholder="Description" onChange={handleNewDescription}></textarea>
                <input className={styles.date} type="date" value={date} id="Date" onChange={handleNewDate} />
                <div className={styles.button}> 
                <button className={styles.btn} onClick={addTasks} >Add Task</button>
                {/* <button className={styles.btn} onClick={addTasks} >Cancel</button> */}
                </div>
            </div>
        </div>
    )
}

export default TodoList;