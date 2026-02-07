// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  // ✅ Move whatever logic you had inside router.get('/', ...) here

  // For now, a simple working response is fine (as per assignment)
  return res.status(200).json({
    message: "Route handled by postController.getAllPosts",
  });
};

module.exports = {
  getAllPosts,
};

