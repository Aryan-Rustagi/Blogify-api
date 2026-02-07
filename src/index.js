const express = require("express");
const app = express();

// ✅ Global middleware
app.use(express.json());

// ✅ Import routes
const postsRouter = require("./src/routes/posts.routes");

// ✅ Health / home route
app.get("/home", (req, res) => {
  res.send("Hey, welcome to Blogify API!");
});

// ✅ Mount routes
app.use("/api/v1/posts", postsRouter);

// ✅ Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
