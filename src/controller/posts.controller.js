// src/controllers/posts.controller.js

exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    return res.status(200).json({
      message: `Fetching data for post with ID: ${postId}`,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error: error.message,
    });
  }
};
