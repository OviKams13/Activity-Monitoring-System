import "./cardInformation.scss";

function CardInformation() {
  return (
    <div className="userCard">
      <div className="userCardHeader">
        <h2>User Information</h2>
        <button className="updateBtn">Update Profile</button>
      </div>
      <div className="info">
        <span>
          Username: <b>Pedri</b>
        </span>
        <span>
          Email: <b>pedri@example.com</b>
        </span>
        <button className="logoutBtn">Logout</button>
      </div>
    </div>
  );
}

export default CardInformation;
