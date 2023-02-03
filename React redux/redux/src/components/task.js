import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTask, editTask } from "../tasksActions";
function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [EditValue, setEditValue] = useState(task.description);

  const handleClick = (e) => {    let editedTask = {
      id: task.id,
      description: EditValue,
      isDone: false,
    };

    dispatch(editTask(editedTask));

    setIsEditing(false);
  };

  return (
    <div className={task.isDone ? "done" : ""}>
      {isEditing ? (
        <form onSubmit={handleClick}>
          <input
            value={EditValue}
            onChange={(e) => setEditValue(e.target.value)}
            type="text"
          />
          <button>save </button>
        </form>
      ) : (
        <div>
          <p onClick={() => dispatch(completedTask(task))}>
            {task.description}
          </p>{" "}
          <button onClick={() => setIsEditing(true)}> edit</button>
        </div>
      )}
    </div>
  );
}

export default Task;
