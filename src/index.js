const express = require('express');
const app = express();

const postsRouter = require('./src/routes/posts.routes');

app.get('/home', (req, res) => {
  res.send('Hey, welcome to Blogify API!');
});

// Mount the posts router
app.use('/api/v1/posts', postsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
