import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
  return (
    <div className="login">
      <div className="formContainer">
        <form>
          <h1>Welcome back</h1>

          <label htmlFor="role" className="roleLabel">Choose your role</label>
          <select id="role" name="role" required defaultValue="">
            <option value="" disabled>Select role</option>
            <option value="employee">Employee</option>
            <option value="supervisor">Supervisor</option>
            <option value="hod">Head of Department</option>
          </select>

          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Login Background" />
      </div>
    </div>
  );
};

export default Login;
