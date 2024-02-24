import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={hanldeSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update the task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
