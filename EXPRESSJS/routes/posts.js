import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';
const router = express.Router();

// --- GET ALL POSTS ---
router.get('/', getPosts);

// --- GET SINGLE POST ---
router.get('/:id', getPost);

// -- NEW ROUTE -- CREATE new post (post request)
router.post('/', createPost);

// --- UPDATE --- put request
router.put('/:id', updatePost);

//  --- DELETE ---
router.put('/:id', deletePost);

export default router;