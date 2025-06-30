import React from 'react';
import './GitHubPage.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Charts from '../../components/charts/Charts';
import ActivityDetails from '../../components/activityDetails/ActivityDetails';

function GitHubPage() {
  return (
    <div className="GitHubPage">
      <div className="leftside">
        <Sidebar />
      </div>

      <div className="rightside">
        <div className='wrapper'>
          <h1 className="title">Stay on Track - Monitor your GitHub Activities</h1>
          <Charts />
        <ActivityDetails />
        </div>
      </div>
    </div>
  );
}

export default GitHubPage;
