import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/stock/${symbol}`);
      setStockData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Stock Trends Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={symbol} 
          onChange={(e) => setSymbol(e.target.value.toUpperCase())} 
          placeholder="Enter Stock Symbol (e.g. AAPL)" 
        />
        <button type="submit">Get Data</button>
      </form>

      {stockData && (
        <div>
          <h2>Data for {symbol}</h2>
          <pre>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
