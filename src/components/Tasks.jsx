import { useRef, useContext } from "react";
import { ProjectsContext } from "../store/projects-context";
export default function Tasks() {
  const { projects, index, addTask, clearTask } = useContext(ProjectsContext);
  const project = projects[index];
  const task = useRef();

  const tasksIsEmpty = project?.tasks.length === 0 ? true : false;

  function onAdd() {
    const enteredTask = task.current.value;

    addTask(index, { name: enteredTask !== "" ? enteredTask : undefined });
  }

  function onClear(taskIndex) {
    const updatedTasks = project.tasks.filter(
      (_, index) => index !== taskIndex
    );
    clearTask(index, updatedTasks);
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input ref={task} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
        <button onClick={onAdd} className="text-stone-700 hover:text-stone-950">
          Add Task
        </button>
      </div>
      {tasksIsEmpty ? (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task, taskIndex) => (
            <li key={taskIndex} className="flex justify-between my-4">
              <p className="text-stone-800 my-4">{task?.name}</p>
              <button
                onClick={() => onClear(taskIndex)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
