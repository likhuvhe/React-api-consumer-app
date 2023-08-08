import React, { useState } from 'react';
import { get } from './apiService';

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
      <button onClick={fetchData}>List Province</button>
      {data && (
        <div>
          <h2>List of Province from API:</h2>
          <table>
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
