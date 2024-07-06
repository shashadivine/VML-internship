import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';
const port = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// use to create routes, start server, middleware, etc.
const app = express();

// --- body parser middleware ---
app.use(express.json()); // to be able to submit raw json
app.use(express.urlencoded({ extended: false})) // allow us to send the form data

// --- LOGGER MIDDLEWARE ---
app.use(logger);

app.use('/api/posts', posts);

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

// setup static folder or STATIC SERVER
app.use(express.static(path.join(__dirname, 'public')));

// listen (port no., optional callback function)
app.listen(port, () => console.log(`Server is running on port ${port}`));
