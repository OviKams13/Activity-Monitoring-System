import "./userListCard.scss";

function UserListCard({ users = [] }) {
  return (
    <div className="userListCard">
      <h2>List of Supervised Users</h2>
      <ul className="userList">
        {users.map((name, index) => (
          <li key={index} onClick={() => console.log("Clicked:", name)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListCard;
