import React from 'react';
import './repoCardInfo.scss';

function RepoCardInfo() {
  return (
    <>
      {/* GitHub Info Card */}
      <div className="infoCard">
        <div className="cardHeader">
          <h2>GitHub Info</h2>
        </div>
        <button className="fetchBtn">Fetch GitHub Info</button>
      </div>

      {/* Repository Info Card */}
      <div className="infoCard">
        <div className="cardHeader">
          <h2>Repository Info</h2>
        </div>
        <ul className="repoList">
          <li><strong>Name:</strong> my-awesome-project</li>
          <li><strong>Description:</strong> This is a sample GitHub repo.</li>
          <li><strong>Created at:</strong> 2023-01-15</li>
          <li><strong>Last pushed:</strong> 2025-06-14</li>
        </ul>
      </div>
    </>
  );
}

export default RepoCardInfo;
