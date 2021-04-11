import React, { useState } from 'react'

function HomePage() {

  const [tasks, setNewTask] = useState([])



  const setTask = e => {
    const newTaskboi = document.getElementById("task").value

    if (newTaskboi) {
      setNewTask([...tasks, newTaskboi])
    }

    document.getElementById("task").value = ''
  }

  const deleteTask = (delTask) => {

    const newTasks = tasks.filter(task => task !== delTask)
    setNewTask(newTasks)

  }

  //editTask
const editTask = (task) => {
  const updateTaskText = document.getElementById("task").value

    if (updateTaskText){
      const updatedTask = tasks.map(arrTask => arrTask === task ? updateTaskText : arrTask )
      setNewTask(updatedTask)
    }
}

  //api call useEffect 



  return (
    <div>
      <label>
        {/* a place to type task */}
        <input id="task" type="text" />

        {/* a place to submit */}
        <button onClick={e => setTask()}> Add Task </button>

      </label>
      <div>
        {tasks.map((task) =>
        (<li> {task} <button onClick={e => deleteTask(task)} > Task completed </button> <button onClick={e => editTask(task)}> edit task </button></li>
        ))}
      </div>


    </div >
  )
}

export default HomePage
