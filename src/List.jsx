import "./list.css";
import React from "react";

export default function List(props) {
  console.log(typeof props.task); // should print "object" (because it's an array)
  console.log(props.task); // check the structure of props.task

  // Check if the task array has any elements before attempting to render
  // if (!Array.isArray(props.task) || props.task.length === 0) {
  //   return <div className="error">No tasks available.</div>;
  // }

  const listEl = props.task.map((task) => {
    return (
      <li key={task.task} className="theone">
        <input type="checkbox" />
        {task.task}{" "}
        <span style={{ color: "red", fontWeight: "900", fontSize: "1.2rem" }}>
          {task.type}
        </span>
      </li>
    );
  });

  return (
    <>
      {props.isAdded == false && (
        <div className="message">
          <p>Here are all the Task</p>
        </div>
      )}
      {props.isAdded == false && (
        <div className="values">
          <ol>{listEl}</ol>
        </div>
      )}
    </>
  );
}
