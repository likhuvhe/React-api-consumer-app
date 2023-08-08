import React from 'react';
import ApiConsumer from './ApiConsumer';
import { setAuthHeader } from './apiService';

const App = () => {
  setAuthHeader('candidate', '12345');

  return (
    <div>
      <h1>Province API Consumer App</h1>
      <ApiConsumer />
    </div>
  );
};

export default App;
