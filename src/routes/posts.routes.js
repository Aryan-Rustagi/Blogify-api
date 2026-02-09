const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

// Existing routes
router.get('/', postController.getAllPosts);

// 👇 Add this BELOW '/' route
router.get('/:postId', postController.getPostById);

module.exports = router;
