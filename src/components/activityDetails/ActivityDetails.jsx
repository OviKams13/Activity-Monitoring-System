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
      <h2 className="sectionTitle">Recent Commits</h2>
      <div className="commitsList">
        {commits.map((commit, index) => (
          <div className="commitItem" key={index}>
            <p><strong>{commit.repo}</strong> — {commit.message}</p>
            <span>{commit.date}</span>
          </div>
        ))}
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
