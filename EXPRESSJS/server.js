const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

// use to create routes, start server, middleware, etc.
const app = express();

// setup static folder or STATIC SERVER
// app.use(express.static(path.join(__dirname, 'public')));

// usually from DB but hardcoding for now
let posts = [
  {id: 1, title: 'Post One'},
  {id: 2, title: 'Post Two'},
  {id: 3, title: 'Post Three'}
];

// --- GET ALL POSTS ---
app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit);

  // adding measures to be strict w accepting queries
  if (!isNaN(limit) && limit > 0){ // if limit is a POSITIVE number
    res.json(posts.slice(0, limit)); // iterates through each line of post and returns until limit (since it starts at 0, it literally includes everything from the top then stops at the limit mismo - cos it starts at 0 inclusive)
  } else{
    res.json(posts); // no limit?
  }
});

// --- GET SINGLE POST ---
app.get('/api/posts/:id', (req, res) => {
 const id = parseInt(req.params.id); // bc route params are STRINGS by default
 res.json(posts.filter((post) => post.id === id));
});


// listen (port no., optional callback function)
app.listen(port, () => console.log(`Server is running on port ${port}`));