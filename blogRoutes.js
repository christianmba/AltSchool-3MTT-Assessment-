const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

const router = express.Router();

router.post('/', authenticateToken, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);
router.put('/:id', authenticateToken, updateBlog);
router.delete('/:id', authenticateToken, deleteBlog);

module.exports = router;