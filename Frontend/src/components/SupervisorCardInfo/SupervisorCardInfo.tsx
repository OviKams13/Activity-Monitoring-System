import React from "react";
import "./supervisorCardInfo.scss";

const SupervisorCardInfo = (): JSX.Element => {
  return (
    <div className="userCard">
      <div className="userCardHeader">
        <h2>Supervisor Information</h2>
        <button className="updateBtn">Update Profile</button>
      </div>
      <div className="info">
        <span>
          Supervisor name: <b>Pedri</b>
        </span>
        <span>
          Email: <b>pedri@example.com</b>
        </span>
        <button className="logoutBtn">Logout</button>
      </div>
    </div>
  );
};

export default SupervisorCardInfo;
