import React from "react";
import { Link } from "react-router-dom";

const ListTodo = ({ todos }) => {
  return (
    <div className="row p-2">
      {todos.map((todo, index) => (
        <Link to={`/todo/${todo.id}`} key={todo.id} className="col-12">
          {index + 1}-{todo.text}
        </Link>
      ))}
    </div>
  );
};

export default ListTodo;
