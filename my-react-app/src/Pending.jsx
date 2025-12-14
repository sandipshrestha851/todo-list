import React, { useState, useContext } from 'react'
import { Tasks } from "./App.jsx"
import styles from './Pending.module.css'
import CheckSound from './assets/check.mp3'
import {CompletedTasks} from './App.jsx'


function Pending() {

    let audio = new Audio(CheckSound);
    audio.volume = 0.2;

    const { tasks, setTasks } = useContext(Tasks);
    const {tasksCompleted , setTasksCompleted} = useContext(CompletedTasks);

    const months = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" ,"December"];

    function removeTasks(i){
        audio.play();
        setTimeout(()=>{
            const completed = tasks.filter((task,index) => index+task.job.replaceAll(" ", "_") == i);
            setTasksCompleted(prev => prev.concat(completed));
            setTasks(prevTasks => prevTasks.filter((task,index) => index+task.job.replaceAll(" ", "_") != i));
        },100)
    }

    return (
        <div>
            <h1 className={styles.pendingTitle}>Pending Tasks</h1>
            <ol className={styles.taskContainer}>
                {tasks.map((task, index) =>{
                   const monthName = months[Number(task.time.split("-")[1])-1];
                   const year = task.time.split("-")[0];
                   const day = task.time.split("-")[2];
                    return(
                    <li key={index+task.job.replaceAll(" ", "_")}>
                        <div className={styles.upperDisplay}>
                        <p className={styles.date}>{`${day} ${monthName}`} &#183; {`${year}`}</p>
                        </div>
                        <div className={styles.lowerDisplay}>
                        <input className={styles.tick} type="checkbox" onChange = {()=> removeTasks(index+task.job.replaceAll(" ", "_"))} />
                        <p className={styles.title}>{task.job}</p>
                        </div>
                        {/* <p className={styles.description}>{task.about}</p> */}
                    </li>
                    )
                })}
            </ol>
        </div>
    )
}
export default Pending;