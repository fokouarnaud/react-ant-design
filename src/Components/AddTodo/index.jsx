import { Button, Input } from "antd";
import React, { useState } from "react";

const AddTodo = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState(null);
  const addTodo = () => {
    if (inputValue) {
      handleSubmit(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="row p-2">
      <div className="col-lg-10 col-md-10 col-xs-12">
        <Input
          value={inputValue}
          onChange={(e) => 
            setInputValue(e.target.value)}
          placeholder="Entrer le nom de la tache"
          onKeyPress={(e) => handleKeyPress(e)}
        />
      </div>
      <div className="col-lg-2 col-md-2 col-xs-12">
        <Button type="primary" onClick={addTodo}>
          Ajouter
        </Button>
      </div>
    </div>
  );
};

export default AddTodo;
