const express = require('express');

const router = express.Router();

// GET /api/v1/posts
router.get('/', (req, res) => {
  res.send('All posts will be returned here!');
});

module.exports = router;
