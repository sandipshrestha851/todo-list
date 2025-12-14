import React , {useState , useContext} from 'react'
import { UserContext } from "./App.jsx";
import styles from './Sidebar.module.css'
import logo from './assets/react.svg'
import hamburger from './assets/hamburger.svg'
import add from './assets/add.svg'
import cross from './assets/cross.svg';
import profile from './assets/profile.png'

function Sidebar(){


    const {active , setActive} = useContext(UserContext);
    const [display,setDisplay] = useState("none");

    return(
        <div>
            <div className={display==="block"?styles.sidebarContainer:styles.none}>
                <div className={styles.cross}>
                    <img src={cross}  onClick={() => setDisplay("none")}/>
                </div>
                <div className={styles.accountRow}>
                    <img className={styles.accountLogo} src={profile} alt="logo" />
                    <p className={styles.accountName}>Guest</p>
                </div>
                <div className={styles.sidebarActivitiesContainer}>
                    <ul className={styles.sidebarActivities}>
                        <li className={active === "add" ? styles.active : ""} onClick={() => setActive("add")}>Add Tasks</li>
                        <li className={active === "today" ? styles.active : ""} onClick={() => setActive("today")}>Today</li>
                        <li className={active === "completed" ? styles.active : ""} onClick={() => setActive("completed")}>Completed</li>
                        <li className={active === "pending" ? styles.active : ""} onClick={() => setActive("pending")}>Pending</li>
                    </ul>
                </div>
            </div>
                <div className={styles.hamburger}>
                    <img src={hamburger} alt="hamburger" onClick={() => setDisplay("block")}/>
                </div>
        </div>
    )
}
export default Sidebar;