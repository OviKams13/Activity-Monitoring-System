import "./login.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function Login() {
  return (
    <div className="loginPage">
      <Navbar />
      <div className="login">
        <div className="formContainer">
          <form>
            <h1>Welcome back</h1>

            <label htmlFor="role" className="roleLabel">Choose your role</label>
            <select id="role" name="role" required>
              <option value="" disabled selected>Select role</option>
              <option value="employee">Employee</option>
              <option value="supervisor">Supervisor</option>
              <option value="hod">Head of Department</option>
            </select>

            <input name="username" type="text" placeholder="Username" />
            <input name="password" type="password" placeholder="Password" />
            <button>Login</button>
            <Link to="/register">{"Don't"} you have an account?</Link>
          </form>
        </div>
        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
