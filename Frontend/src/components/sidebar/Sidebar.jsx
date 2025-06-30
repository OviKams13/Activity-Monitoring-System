import "./sidebar.scss";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="/logo.png" alt="App Logo" />
          <span>HR Worker</span>
        </div>
        <div className="links">
          <a href="/">Desktop Activity</a>
          <Link to="/GitHubPage">GitHub Activity</Link>
        </div>
      </div>

      <div className="bottom">
        <Link to="/update" className="signInBtn">
          <img src="noavatar.jpg" alt="" />
          Pedri Gonzales
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
