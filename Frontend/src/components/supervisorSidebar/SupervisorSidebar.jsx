import "./supervisorSidebar.scss";
import { Link } from "react-router-dom";

function SupervisorSidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="/logo.png" alt="App Logo" />
          <span>HR Worker</span>
        </div>
        <div className="links">
          <a href="supervisor">Employee Desktop Activity</a>
          <Link to="/supervisorGitHubPage">Employee GitHub Activity</Link>
        </div>
      </div>

      <div className="bottom">
        <Link to="/update" className="signInBtn">
          <img src="noavatar.jpg" alt="" />
          Hansi Flick
        </Link>
      </div>
    </div>
  );
}

export default SupervisorSidebar;
