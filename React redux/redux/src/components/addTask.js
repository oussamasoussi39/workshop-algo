import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTaskAction } from "../tasksActions";

function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (task) {
      dispatch(AddTaskAction(task));
      setTask("");
    } else {
      alert("enter your new task");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
       
      />
      <button onClick={handleClick}> addTask</button>
    </div>
  );
}

export default AddTask;
