import React from 'react';
import './activityDetails.scss';

function ActivityDetails() {
  const commits = [
    { repo: 'Repo 1', message: 'Initial commit', date: '2025-06-08' },
    { repo: 'Repo 2', message: 'Fix navbar bug', date: '2025-06-09' },
    { repo: 'Repo 3', message: 'Add login form', date: '2025-06-10' },
  ];

  const branches = ['main', 'dev', 'feature/navbar', 'hotfix/login-bug'];

  return (
    <>
      <div className='ActD'>
      <div className="commitsList">
        <h2 className="sectionTitle">Recent Commits</h2>
        {commits.map((commit, index) => (
          <div className="commitItem" key={index}>
            <p><strong>{commit.repo}</strong> — {commit.message}</p>
            <span>{commit.date}</span>
          </div>
        ))}
      </div>

      <div className='card'>
        <h2 className="sectionTitle">Repository Info</h2>
        <div className="infoCard">
        <ul className="repoList">
          <li><strong>Name:</strong> my-awesome-project</li>
          <li><strong>Description:</strong> This is a sample GitHub repo.</li>
          <li><strong>Created at:</strong> 2023-01-15</li>
          <li><strong>Last pushed:</strong> 2025-06-14</li>
        </ul>
      </div>
      </div>
      </div>

     
        <h2 className="sectionTitle">Branches</h2>
      <select className="branchSelect">
        {branches.map((branch, index) => (
          <option key={index} value={branch}>{branch}</option>
        ))}
      </select>
     
      </>
  );
}

export default ActivityDetails;
