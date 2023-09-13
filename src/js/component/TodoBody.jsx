import React, { useState, useEffect } from "react";

const TodoBody = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = (newTodo) => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/Wjerry11", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newTodo })

        })
            .then((response) => response.json()).catch((error) => console.log("error", error));
    };

    const addTask = (taskLabel) => {
        let newList = list.concat([{ label: taskLabel, done: false }]);
        setList(newList);
        fetchTasks(newList);
        setInput("")

    };

    const deleteTask = (index) => {
        console.log("Deleting task with ID:", index);
        let newList = list.filter((item, currentIndex) => index != currentIndex)
        setList(newList);
        fetchTasks(newList);
    };



    return (
        <>
            <div className="container">
                <div className="todoBody">
                    <h1>
                        <strong>TodoList</strong>
                    </h1>
                </div>
                <div className="todoinput">
                    <input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                    />
                    <button
                        onClick={() => {
                            if (input === "") {
                                alert("Input field cannot be empty");
                            } else {
                                addTask(input);
                            }
                        }}
                    >
                        Add task
                    </button>
                    {list.length > 0 ? (
                        list.map((task, index) => (
                            <div key={task.id}>
                                <span>{task.label}{" "}</span>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No tasks found</p>
                    )}
                </div>
                {list.length + " items left"}
            </div>
        </>
    );
};

export default TodoBody;