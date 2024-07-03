import express from 'express';
import path from 'path';
import posts from './routes/posts.js';
const port = process.env.PORT || 8080;

// use to create routes, start server, middleware, etc.
const app = express();

// --- body parser middleware ---
app.use(express.json()); // to be able to submit raw json
app.use(express.urlencoded({ extended: false})) // allow us to send the form data



app.use('/api/posts', posts);

// setup static folder or STATIC SERVER
// app.use(express.static(path.join(__dirname, 'public')));

// listen (port no., optional callback function)
app.listen(port, () => console.log(`Server is running on port ${port}`));
