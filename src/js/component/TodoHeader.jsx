import React, { useState } from "react";

const TodoHeader = () => {
  const [input, setInput] = useState("");
  const [list, SetList] = useState([]);
  console.log(list);
  const deleteByIndex = (index) => {
    SetList((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };
  return (
    <>
      <div className="container">
        <div className="todoHeader">
          <h1>
            <strong> TodoList</strong>
          </h1>
        </div>
        <div className="todoinput">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button onClick={() => SetList([...list, input])}> Add task </button>
          {list.map((list, index) => {
            return (
              <>
                <li> {list}</li>
                <button onClick={() => deleteByIndex(index)}> delete </button>
              </>
            );
          })}
        </div>
        {list.length + " items left"}
      </div>
    </>
  );
};

export default TodoHeader;
