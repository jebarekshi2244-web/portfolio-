import React from "react";
import './Dashboard.css';

const Dashboard=()=>{
    return(
        <div className="full-screen">
            <div className="components">
                <h3>Total Task</h3>
                <p><b>20</b></p>
            </div>
            <div className="component_1">
                <h3>Completed Task </h3>
                <p><b>15</b></p>
            </div>
            <div className="component_2">
                <h3>Pending Task</h3>
                <p><b>5</b></p>
            </div>
    <div className="add-task">

    <h3>Add New Task</h3>

    <div className="task-input">
        <input
            type="text"
            placeholder="Enter task name..."
        />

        <select>
            <option>Priority</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
        </select>

        <button>+ Add Task</button>
        <br/>
    </div>
    

</div>
<br/>






<div className="my-tasks">

    <h3>My Tasks</h3>

    <div className="task-row">
        <input type="checkbox" />
        <span>Complete Project</span>
        <span className="high">HIGH</span>
        <button>🗑</button>
    </div>

    <div className="task-row">
        <input type="checkbox" checked readOnly />
        <span>Prepare PPT</span>
        <span className="low">LOW</span>
        <button>🗑</button>
    </div>

    <div className="task-row">
        <input type="checkbox" />
        <span>Study React</span>
        <span className="medium">MEDIUM</span>
        <button>🗑</button>
    </div>

    <div className="task-row">
        <input type="checkbox" checked readOnly />
        <span>Complete Assignment</span>
        <span className="high">HIGH</span>
        <button>🗑</button>
    </div>

    <div className="task-row">
        <input type="checkbox" />
        <span>Practice JavaScript</span>
        <span className="low">LOW</span>
        <button>🗑</button>
    </div>

    <div className="completed-total">
        ✓ Completed: 2 / 5 tasks
    </div>

</div>

        </div>
    );
}
export default Dashboard;