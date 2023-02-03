import { useSelector } from "react-redux";
import "./App.css";
import ListTask from "./components/ListTask";
import AddTask from "./components/addTask";

function App() {
  const tasks = useSelector((state) => state.taskReducers.tasks);

  return (
    <div className="App">
      <AddTask />

      <ListTask tasks={tasks}  />
    </div>
  );
}

export default App;
