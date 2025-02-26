import React from "react";
import "./index.css";

export default function CustomForm(props) {
  return (
    <>
      {props.submitted == false && (
        <section className="form">
          <p className="well">
            Welcome to To-Do a web app to tarck you activites and task.
          </p>
          <p>
            Provide your name so that the list can be accessed by you form any
            devices.
          </p>

          <form onSubmit={props.handleClick} className="form1">
            <label htmlFor="name">
              Name:
              <input type="text" name="name" autoComplete="off" required />
            </label>

            <button type="submit" className="btn1">
              Enter app
            </button>
          </form>
          <div className="info">
            <h2>Why Use To-Do?</h2>
            <ul>
              <li>✔ Organize your daily tasks efficiently</li>
              <li>✔ Access your list from any device</li>
              <li>✔ Simple and user-friendly interface</li>
              <li>✔ Keep track of your progress effortlessly</li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
