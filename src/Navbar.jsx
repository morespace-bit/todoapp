import logo from "./assets/logo.png"; // Correct path based on your file structure
import man from "./assets/man.png";
import "./header.css";

export default function Navbar(props) {
  return (
    <>
      <header>
        <img src={logo} alt="logo " className="logo" />
        <span>To-Do</span>
      </header>
      <main>
        {props.submitted && (
          <div className="name">
            <img src={man} alt="man-logo" className="man" />
            <span>{props.name}</span>
          </div>
        )}
      </main>
    </>
  );
}
