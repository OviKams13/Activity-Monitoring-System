import React from 'react';
import './GitHubPage.scss';

import Charts from '../../components/charts/Charts';
import ActivityDetails from '../../components/activityDetails/ActivityDetails';
import RepoCardInfo from '../../components/repoCardInfo/RepoCardInfo';

function GitHubPage() {
  return (
    <div className="GitHubPage">
      <div className="leftside">
        <Charts />
        <ActivityDetails />
      </div>

      <div className="rightside">
        <RepoCardInfo />
      </div>
    </div>
  );
}

export default GitHubPage;
