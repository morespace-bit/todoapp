import CustomForm from "./CustomForm";
import Navbar from "./Navbar";
import React from "react";
import Todo from "./Todo";
export default function App() {
  const [submitted, setSubmitted] = React.useState(false);
  const [name, Setname] = React.useState("");
  function handleClick(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name");
    setSubmitted(true);
    Setname(name);
  }
  return (
    <>
      <Navbar submitted={submitted} name={name} />
      <CustomForm handleClick={handleClick} submitted={submitted} />
      <Todo name={name} submitted={submitted} />
    </>
  );
}
