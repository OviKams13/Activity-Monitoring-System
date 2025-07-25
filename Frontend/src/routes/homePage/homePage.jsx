import "./homePage.scss";
import TableContainer from "../../components/TableContainer/TableContainer";
import Sidebar from "../../components/sidebar/Sidebar";

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
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
    {
      appName: "Google Chrome13",
      duration: "45 min",
      date: "2025-06-08",
      time: "01:00 PM",
    },
  ];

  return (
    <div className="homePage">
      <div className="imgContainer">
        <Sidebar />
      </div>

      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Stay on Track - Monitor your Desktop Usage</h1>
          <TableContainer data={dummyData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;