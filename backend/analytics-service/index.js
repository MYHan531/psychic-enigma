// analytics-service/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// POST endpoint to process data
app.post('/api/analyze', (req, res) => {
  const { timeSeriesData } = req.body;
  // Perform some calculations, e.g. average price, detect trends...
  const analysisResult = computeTrends(timeSeriesData);
  return res.json({ analysisResult });
});

function computeTrends(data) {
  // your custom logic here...
  return {
    trend: "Bullish", 
    averagePrice: 150.34 
    // etc.
  };
}

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});
