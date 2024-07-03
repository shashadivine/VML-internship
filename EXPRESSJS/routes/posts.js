import express from 'express';
const router = express.Router();

// usually from DB but hardcoding for now
let posts = [
  {id: 1, title: 'Post One'},
  {id: 2, title: 'Post Two'},
  {id: 3, title: 'Post Three'}
];

// --- GET ALL POSTS ---
router.get('/', (req, res) => {
  const limit = parseInt(req.query.limit);

  // adding measures to be strict w accepting queries
  if (!isNaN(limit) && limit > 0){ // if limit is a POSITIVE number
    res.status(200).json(posts.slice(0, limit)); // iterates through each line of post and returns until limit (since it starts at 0, it literally includes everything from the top then stops at the limit mismo - cos it starts at 0 inclusive)
  } else{
    res.status(200).json(posts); // no limit
    // res.json has a default status code of 200 but passing it for readability
  }
});

// --- GET SINGLE POST ---
router.get('/:id', (req, res) => {
 const id = parseInt(req.params.id); // bc route params are STRINGS by default
 const post = posts.find((post) => post.id === id);

// no 'else'
 if (post){
  return res
    .status(200)
    .json(post);
 }
res.status(404).json({message: `A post with an ID of ${id} was not found.`})
 });

// -- NEW ROUTE -- create new post (post request)
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if(!newPost.title){
    return res.status(400).json({message: "Please include a title"})
  }
  posts.push(newPost);
  res.status(201).json(posts);
 
});



export default router;