import "./profileUpdatePage.scss";
import Sidebar from "../../components/sidebar/Sidebar";

function ProfileUpdatePage() {
  return (
    <div className="profileUpdatePage">
      <div className="sideContainer">
        <Sidebar />
      </div>
      <div className="wrapper">
        <div className="formContainer">
        <form>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
        </form>
      </div>
      <div className="profilepic">
        <div className="pp">
          <img src="noavatar.jpg" alt="" />
        </div>
        <button>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
