export const Add_Task = "Add_Task";

export const AddTaskAction = (task) => {
  return { type: Add_Task, payload: task };
};

export const completedTask = (task) => {
  return { type: completedTask, payload: task };
};
export const editTask = (task) => {
  return { type: editTask, payload: task };
};
