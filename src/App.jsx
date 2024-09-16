import "./App.css";
import React, { useState, useRef, useEffect } from 'react';

const App = () => {
    const initialTask = [
        "Take a bath",
        "Breakfast",
        "Go to school",
        "Eat lunch",
        "Do homework"
    ];
    const [tasks, setTasks] = useState(
        initialTask
        // []
    );

    const ref = useRef(null);

    const newTask = () => {
        const task = ref.current.value;

        if (task !== "") {
            setTasks([...tasks, task]);
            ref.current.value = "";
        }
    };

    const deleteTask = index => {
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    };

    useEffect(() => {
        console.log("Screen width is " + window.screen.availWidth);
    }, []);

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="header">
                <h1>Todo App</h1>
                <p>v0.1.2024_9_15-beta React.js ver</p>
            </div>

            
            <div className="newTaskDiv">
                <input
                    ref={ref}
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
