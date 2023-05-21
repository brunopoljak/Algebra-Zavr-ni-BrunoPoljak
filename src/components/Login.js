import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import icon from "./icon-128x128.png";

const Login = (props) => {
  const [usernameText, setUsernameText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(usernameText);
    navigate("/Algebra-Zavr-ni-BrunoPoljak/");
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="loginimg">
          <img src={icon} width="100" height="100" />
        </div>
        <label htmlFor="title">
          <h1>Chat account</h1>
        </label>
        <input
          id="title"
          className="titleborder"
          type="text"
          placeholder="Enter your username"
          required
          value={usernameText}
          onChange={(e) => setUsernameText(e.target.value)}
        />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
