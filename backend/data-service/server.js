const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Example: Using Alpha Vantage
const ALPHA_VANTAGE_API_KEY = 'BJM6EOT24UPN8O9C';

// GET endpoint to fetch stock data
app.get('/api/stock/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Data Service running on port ${PORT}`);
});
