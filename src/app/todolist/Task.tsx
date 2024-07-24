//define props using object destructuring
export const Task = () => {
  return (
    <li className="my-2 ms-2">
      <span>This a task item</span>
      <button className="btn btn-danger ms-1">Delete</button>
    </li>
  );
};
