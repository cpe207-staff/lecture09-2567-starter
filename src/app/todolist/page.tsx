import { Task } from "./Task";
export default function TodolistPage() {
  let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: false },
    { id: 5, title: "Task 5", completed: false },
    //... more tasks here... 1000+ tasks would be too much to display here
  ];

  return (
    <div style={{ maxWidth: "400px" }} className="mx-auto">
      <h3 className="text-center">Simple Todo List</h3>
      <div className="d-flex">
        <input
          className="form-control d-inline mx-1"
          placeholder="Insert task"
          style={{ width: "250px" }}
        />
        <button className="btn btn-primary ">Add task</button>
      </div>

      {/* Add task here */}
    </div>
  );
}
