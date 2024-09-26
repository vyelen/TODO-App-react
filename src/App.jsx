import "./App.css";
import React, { useState, useRef } from 'react';

const App = () => {

    // development only
    const exampleTask = [
        "Take a bath",
        "Breakfast",
        "Go to school",
        "Eat lunch",
        "Do homework"
    ];

    const [tasks, setTasks] = useState(
        exampleTask
        // []
    );

    const input = useRef(null);

    const newTask = () => {
        const task = input.current.value;

        if (task !== "") {
            setTasks([...tasks, task]);
            input.current.value = "";
        }
    };

    const deleteTask = index => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    };

    return (
        <>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" /> { /* responsive website */ }

            <div className="header">
                <h1>Todo App</h1>
                <p>v0.1.2024_9_15-beta React.js ver</p>
            </div>
            
            <div className="newTaskDiv">
                <input
                    ref={input}
                    id="taskNameInput"
                    type="text"
                    placeholder="Type something here..."/>
                <button id="newTaskBtn" onClick={newTask}>Add Task</button>
            </div>
                
            {tasks.map((task, index) =>
                <>
                    <div className="task" key={index}>
                        <span id="taskName">{task}</span>
                        <button id="deleteBtn" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </>
             )}

            <div className="footer">
                <p>credit: <a href="https://github.com/vyelen">@vyelen (GitHub)</a></p>
            </div>
        </>
    );
};

export default App;
