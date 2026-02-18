// src/controllers/posts.controller.js

const Post = require('../models/post.model');

// @desc    Get all posts
// @route   GET /api/v1/posts
// @access  Public
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();

    return res.status(200).json({
      success: true,
      data: {
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single post
// @route   GET /api/v1/posts/:id
// @access  Public
exports.getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    return res.status(200).json({
      success: true,
      data: {
        post,
      },
    });
  } catch (error) {
    next(error);
  }
};
