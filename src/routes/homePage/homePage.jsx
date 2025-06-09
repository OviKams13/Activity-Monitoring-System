// import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  const dummyData = [
    {
      appName: "WhatsApp",
      duration: "30 min",
      date: "2025-06-08",
      time: "10:30 AM",
    },
    {
      appName: "Twitter",
      duration: "15 min",
      date: "2025-06-08",
      time: "11:00 AM",
    },
    {
      appName: "YouTube",
      duration: "1h 05 min",
      date: "2025-06-08",
      time: "12:15 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
  ];

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Stay on Track - Monitor Your Desktop Usage</h1>

          <div className="tableContainer">
            <h2>Activity Log</h2>
            <table>
              <thead>
                <tr>
                  <th>Application Name</th>
                  <th>Duration</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.appName}</td>
                    <td>{entry.duration}</td>
                    <td>{entry.date}</td>
                    <td>{entry.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="imgContainer">
        <div className="userCard">
          <div className="userCardHeader">
            <h2>User Information</h2>
            <button className="updateBtn">Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src="noavatar.jpg" alt="Avatar" />
            </span>
            <span>
              Username: <b>Pedri</b>
            </span>
            <span>
              Email: <b>pedri@example.com</b>
            </span>
            <button className="logoutBtn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
