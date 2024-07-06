// usually from DB but hardcoding for now
let posts = [
  {id: 1, title: 'Post One'},
  {id: 2, title: 'Post Two'},
  {id: 3, title: 'Post Three'}
];

// @ desc     Get all posts
// @ route    GET /api/posts
export const getPosts =  (req, res, next) => {
  const limit = parseInt(req.query.limit);

  // adding measures to be strict w accepting queries
  if (!isNaN(limit) && limit > 0){ // if limit is a POSITIVE number
    res.status(200).json(posts.slice(0, limit)); // iterates through each line of post and returns until limit (since it starts at 0, it literally includes everything from the top then stops at the limit mismo - cos it starts at 0 inclusive)
  } else{
    res.status(200).json(posts); // no limit
    // res.json has a default status code of 200 but passing it for readability
  }
}

// @ desc     Get single post
// @ route    GET /api/posts/:id
export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id); // bc route params are STRINGS by default
  const post = posts.find((post) => post.id === id);
 
 // no 'else'
  if (post){
   return res
     .status(200)
     .json(post);
  }
 res.status(404).json({message: `A post with an ID of ${id} was not found.`})
  }

// @ desc     Create new post
// @ route    POST /api/posts
export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1, // new ID by getting no. of posts + 1 so each is unique (e.g. 3 posts and the last id is 3, ofc u want the next to be id 4)
    title: req.body.title, // extracts title from request body
  };

  if(!newPost.title){
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }
  posts.push(newPost); // adds new post to array (posts)
  res.status(201).json(posts); // created status
 
}

// @ desc     UPDATE existing post
// @ route    PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post){
    post.title = req.body.title;
    res.status(200).json(posts);
  } else {
    const error = new Error(`Please include a title`);
    error.status = 404;
    return next(error);    
  }
}

// @ desc     DELETE existing post
// @ route    PUT /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (post){
    posts = posts.filter((post) => post.id !== id); // filtering what data you want seen (e.g. filter in notion)
    res.status(200).json(posts);
  } else {
    const error = new Error(`Please include a title`);
    error.status = 404;
    return next(error);
  }
}