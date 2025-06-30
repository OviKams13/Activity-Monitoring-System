import './supervisorGitHubPage.scss';
import TableContainer from "../../components/TableContainer/TableContainer";
import Charts from '../../components/charts/Charts';
import ActivityDetails from '../../components/activityDetails/ActivityDetails';
import UserListCard from '../../components/UserListCard/UserListCard';
import SupervisorSidebar from '../../components/supervisorSidebar/SupervisorSidebar';

function SupervisorGitHubPage() {
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
    <div className='supervisorPage'>
      <div className="rightside">
        <SupervisorSidebar/>
      </div>
      
      <div className='wrapper1'>
        <div className="leftside">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="noavatar.jpg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Pedri</b>
            </span>
            <span>
              E-mail: <b>pedri@example.com</b>
            </span>
          </div>
          <Charts />
          <ActivityDetails />
          {/* <UserListCard users={["Lamine", "Gavi", "Messi", "Raphinha", "Cubarsi"]} /> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default SupervisorGitHubPage;
