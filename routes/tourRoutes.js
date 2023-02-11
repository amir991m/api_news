const express = require('express');
const {
  getAllPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} = require('../controlers/postController');

const router = express.Router();

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').get(getPost).patch(updatePost).delete(deletePost);

module.exports = router;
