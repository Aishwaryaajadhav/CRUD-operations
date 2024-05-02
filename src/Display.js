// DisplayData.js
import React from 'react';
import DeleteData from './DeleteData';

const DisplayData = ({ data, onUpdateData, onDeleteData }) => {
  return (
    <center>
      <div className="rec">
        <br />
        <h2>STUDENT RECORDS</h2>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Results</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => onUpdateData({ id: item.id, name: prompt('Enter new name:', item.name), description: prompt('Enter new result:', item.description) })}>
                    Update
                  </button>
                  <DeleteData onDeleteData={onDeleteData} itemId={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </center>
  );
};

export default DisplayData;

