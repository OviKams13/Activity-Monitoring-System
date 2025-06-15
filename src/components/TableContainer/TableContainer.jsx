import "./tableContainer.scss";

function TableContainer({ data }) {
  return (
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
          {data.map((entry, index) => (
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
  );
}

export default TableContainer;