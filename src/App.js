import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListTodo from "./Components/ListTodo";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [isFetch, setIsFetch] = useState(false);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        text: text,
        id: uuidv4(),
      },
    ];
    setTodos(newTodos);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = () => {
    axios
      .get(
        `https://randomuser.me/api/?
        results=10&inc=name,gender,email,nat,picture&noinfo`
      )
      .then((response) => {
        console.log('response',response)
        setTodos(response.data.results);
        setIsFetch(true);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="container">
      <AddTodo handleSubmit={addTodo} />
      {isFetch && <ListTodo todos={todos} />}
    </div>
  );
};

export default App;
