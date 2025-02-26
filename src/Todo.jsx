import "./todo.css";
import addlogo from "./assets/add-button.png";
import React from "react";
import List from "./list";

export default function Todo(props) {
  const [add, setAdd] = React.useState(false);
  const [task, setTask] = React.useState([]); // Stores tasks
  console.log(typeof task);
  const [para, setPara] = React.useState(true); // Controls "Click plus" message

  function handleClick() {
    setAdd((prev) => !prev);
  }

  function formData(event) {
    event.preventDefault(); // Prevent page refresh

    const data = new FormData(event.target); // Get form data

    let newTask = {
      task: data.get("task"), // Get task name
      type: data.get("task-type"), // Get selected radio button value
    };

    setTask((prev) => [...prev, newTask]); // Add new task
    // console.log(task);
    console.log(typeof task);
    setPara(false); // Hide message

    setAdd((pre) => {
      return !pre;
    }); // Close the form
    event.target.reset(); // Reset form after submission
  }

  return (
    <>
      {props.submitted && (
        <>
          <section className="todo">
            <h1>Hello, {props.name}</h1>
          </section>

          <div className="list">
            {para && <p>Click the plus icon to get started</p>}
            <button className="add" onClick={handleClick}>
              <img src={addlogo} alt="Add task" />
            </button>
          </div>

          {add && (
            <div className="addAction">
              <form onSubmit={formData} className="todoform">
                <label htmlFor="task">
                  Enter Task Name:
                  <input type="text" name="task" id="task" required />
                </label>

                <fieldset>
                  <legend>What kind of task is it?</legend>

                  <label>
                    <input
                      type="radio"
                      value="casual"
                      name="task-type"
                      required
                    />
                    Casual
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="important"
                      name="task-type"
                      required
                    />
                    Important
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="urgent"
                      name="task-type"
                      required
                    />
                    Urgent
                  </label>
                </fieldset>

                <button type="submit" className="btn3">
                  Add the task
                </button>
              </form>
            </div>
          )}

          <List task={task} isAdded={add} />
        </>
      )}
    </>
  );
}
