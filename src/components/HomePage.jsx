import React, {useState} from 'react'

function HomePage() {

const [task, setNewTask] = useState('')



const setTask = e => {
  const newTaskboi = document.getElementById("task").value

  setNewTask(newTaskboi)
}


  return (
    <div>
      <h2>
        To Do List
      </h2>
        <div> 
            Todays Task 
        </div>

        <label>
          {/* a place to type task */}
          <input id="task" type="text"/>

          {/* a place to submit */}
          <button onClick={e => setTask()}> Add Task </button>
    
        </label>
        <div>
          <h2 value={task}> {task} </h2>
        </div>
    </div>
  )
}

export default HomePage
