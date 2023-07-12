import { Breadcrumb, Card } from "antd";
import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo";
import { v4 as uuidv4 } from "uuid";
import ListTodo from "../ListTodo";
import { Link } from "react-router-dom";

const TEST_APP = "FORMATION_TODO_APP_STEP1";
function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        text: text,
        id: uuidv4(),
      },
    ];
    setTodos(newTodos);
    saveTodo(newTodos);
  };

  const getTodosSave = () => {
    const localTodos = localStorage.getItem(TEST_APP);
    if (localTodos) {
      return JSON.parse(localTodos);
    }
    return [];
  };

  const saveTodo = (todos) => {
    localStorage.setItem(TEST_APP, JSON.stringify(todos));
  };

  useEffect(() => {
    setTodos(getTodosSave);
  }, []);

  return (
    <div className="container">
      <div className="row py-2">
        <div className="col-12">
          <Breadcrumb
            items={[
              {
                title: <Link to="/">Home</Link>,
              },

              {
                title: "Mes todos",
              },
            ]}
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12">
          <Card title="Bon retour maitre !">
            <AddTodo handleSubmit={addTodo} />

            <div className="row">
              <div className="col-12 pt-3">
                <ListTodo todos={todos} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Todo;
