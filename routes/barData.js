const express = require('express');
const router = express.Router();
const Data = require('../models/Data'); 

router.get('/bar-data', async (req, res) => {
  try {
    const barData = await Data.aggregate([
      {
        $group: {
          _id: "$country",
          intensity: { $sum: "$intensity" },
          relevance: { $sum: "$relevance" },
          likelihood: { $sum: "$likelihood" },
        },
      },
      {
        $project: {
          country: "$_id",
          intensity: 1,
          relevance: 1,
          likelihood: 1,
          _id: 0,
        },
      },
    ]);

    res.status(200).json(barData);
  } catch (err) {
    console.error('Error retrieving bar data:', err);
    res.status(500).json({ message: 'Error retrieving bar data' });
  }
});

module.exports = router;