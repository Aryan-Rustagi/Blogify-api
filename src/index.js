const express = require('express');
const app = express();

app.get('/home', (req, res) => {
  res.send('Hey, welcome to Blogify API!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
