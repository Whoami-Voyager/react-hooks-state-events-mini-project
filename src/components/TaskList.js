import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {

  const [newTask, setTasks] = useState(tasks);

  function deleteTask(text) {
    const newTasks = tasks.filter(task => task.text !== text);
    setTasks(newTasks);
  }

  const task = newTask.map((things, index) => {
    return <Task key={index} text={things.text} category={things.category} deleteTask={deleteTask} />;
  })

  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
