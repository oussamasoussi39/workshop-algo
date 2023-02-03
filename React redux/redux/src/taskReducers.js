import { Add_Task } from "./tasksActions";
import { completedTask, editTask } from "./tasksActions";

const initialState = {
  tasks: [
    { id: Math.random(), description: "workshop", isDone: false },
    { id: Math.random(), description: "lunch", isDone: true },
  ],
};

const taskReducers = (State = initialState, { type, payload }) => {
  const newTask = { id: Math.random(), description: payload, isDone: false };

  if (type === Add_Task) return { tasks: [...State.tasks, newTask] };
  if (type === completedTask)
    return {
      tasks: State.tasks.map((Task) =>
        Task.id === payload.id ? { ...payload, isDone: !payload.isDone } : Task
      ),
    };
  if (type === editTask)
    return {
      tasks: State.tasks.map((Task) => {
        if (Task.id === payload.id) {
          Task.id = payload.id;
          Task.description = payload.description;
          Task.isDone = payload.isDone;
        }
        return Task;
      }),
    };
  else {
    return State;
  }
};
export default taskReducers;
