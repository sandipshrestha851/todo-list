import AddTask from './AddTask.jsx'
import Sidebar from './Sidebar.jsx'
import Today from './Today.jsx'
import Pending from './Pending.jsx'
import Completed from './Completed.jsx'
import './App.css'
import TodoList from './TodoList.jsx'
import React , {useState , createContext} from 'react'

export const UserContext = createContext();
export const Tasks = createContext();
export const CompletedTasks = createContext();
function App() {
  const [tasksCompleted , setTasksCompleted] = useState([]);
  const [tasks , setTasks] = useState([]);
  const [active , setActive] = useState("add");
    return(
      <CompletedTasks.Provider value={{tasksCompleted , setTasksCompleted}} >
      <Tasks.Provider value={{tasks, setTasks}}>
     <>
     <div style={{display : active === "add" ? "block" : "none"}}>
       <AddTask/>
     </div>
 
     <div style={{display : active === "today" ? "block" : "none"}}>
       <Today/>
     </div>
 
     <div style={{display : active === "pending" ? "block" : "none"}}>
       <Pending/>
     </div>
     
     <div style={{display : active === "completed" ? "block" : "none"}}>
       <Completed/>
     </div>
     
     {/* {active === "today" && <TodoList/>} */}
     <UserContext.Provider value={{active,setActive}}>
       <Sidebar/>
     </UserContext.Provider>
     </>
  </Tasks.Provider>
  </CompletedTasks.Provider>
    )
}

export default App
