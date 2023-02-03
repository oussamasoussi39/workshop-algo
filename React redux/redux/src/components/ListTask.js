import React, { useState } from "react";
import Task from "./task";

function ListTask({ tasks }) {
  const [Filter, setFilter] = useState("All");
  return (
    <div>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Done")}>Done</button>
        <button onClick={() => setFilter("Not Done")}>Not done </button>
      </div>
      <div>
        {(Filter === "Done"
          ? tasks.filter((task) => task.isDone === true)
          : Filter === "Not Done"
          ? tasks.filter((task) => task.isDone === false)
          : tasks).map(task => { return  <Task key={task.id} task={task} />})}
      </div> 

    
    </div>
  );
}

export default ListTask;
