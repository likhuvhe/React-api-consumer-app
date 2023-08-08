import React, { useState } from 'react';
import { get } from './apiService';
import './ApiConsumer.css';

const ApiConsumer = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await get();
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Click here to Display Provinces</button>
      {data && (
        <div className="api-consumer-container">
          <h2>List of Province from API:</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Display Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
              <tr key={index}>
                <td>{item['display-name']}</td>
                <td>{item.value}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApiConsumer;
