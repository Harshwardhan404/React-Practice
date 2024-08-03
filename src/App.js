import { useState } from 'react';
import styles from './App.module.css'

function App() {

const [currentTask, setCurrentTask] = useState("")

const [listOfTasks, setListOfTasks] = useState([])

const [error, setError] = useState("type Something");


  const handleOnChange = (event)=>{
  setCurrentTask(event.target.value)
  setError(false);
  }

  // Add Task
  const handleAddTask = ()=>{

    if(currentTask === ""){
      setError("Type Something")
    }

    const trimmedTask = currentTask.trim();

  // Check if the trimmed input is not empty
  if (trimmedTask === "") {
    return; // Do nothing if the task is empty
  }

    const task = {
      id : listOfTasks.length ===0 ? 1 :  listOfTasks[listOfTasks.length - 1].id + 1,
      taskName : currentTask,
      status : false
    }

    setListOfTasks([...listOfTasks, task])

    let a = document.getElementById('input')
    setCurrentTask(a.value = '') 


  }
  
  // Delete Task

  const deleteTask = (id)=>{
    //1 setListOfTasks(listOfTasks.filter((currentTask)=> currentTask.id !== id))

    // 2 
     setListOfTasks(listOfTasks.filter((value)=>{
      return value.id !== id
    }))

  }


  const onComplete =(id)=>{
    setListOfTasks(listOfTasks.map((task)=>{
      if(task.id === id){
        return {...task, status : true};
      } else {
        return task
      }
    }))
  }

  

  return (
   
    <div className={styles.App}>

        <div className={styles}><h1>Todo List</h1></div>

        <input type='text' id='input'  className={styles.input} onChange={handleOnChange}/>
        <button className={styles.button} id={styles.butt} onClick={handleAddTask}>Add Task</button> <br/>
        <div style={{color : "red"}}>{error}</div>

        {listOfTasks.map((task)=>{
      return (

      <div className={styles.task} style={{ backgroundColor : task.status ? "#06c739" : "" }}> 

              <h1 >{task.taskName}</h1>
              <button className={styles.button} onClick={()=> deleteTask(task.id)}>Delete Task</button>
              <button className={styles.button} onClick={()=> onComplete(task.id)}>Completed</button>
        </div>

        )})}

    </div>
  
  )
}



export default App;
