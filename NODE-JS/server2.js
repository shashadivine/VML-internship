// -- BUILDING A SIMPLE API | HTTP MODULE --
import { createServer } from 'http';
const PORT = process.env.PORT;

// usually from DB but hardcoded first
const users = [
  {id: 1, name: "Rachel Green"},
  {id: 2, name: "Chandler Bing"},
  {id: 3, name: "Monica Geller"}

];

// --- MIDDLEWARE ---

// logger middleware - log url and method when a request is made
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
}

// JSON middleware
const json_middleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
}

// -- ROUTE HANDLER --

// get user HANDLER
const get_users = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
}

// get user ID HANDLER
const get_userid = (req, res) => {
  const id = req.url.split('/')[3];
  // loops through the users and check the ID and see if it's = to the id var 
  const user = users.find((user) => user.id === parseInt(id));

  if (user){
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({message: "User not found"}));
  }
  res.end();
}

// route handler for POST --- to make a new user ---
// callback function handles data asynchronously
const create_user = (req, res) => {
  // -- INITIALIZAION -- initialize body to collect data (simpler on express)
  let body = '';
  // -- RECEIVING DATA --
  // event listener (this callback function) is triggered when body receives CHUNK of data (from post)
  req.on('data', (chunk) => {
    body += chunk.toString() // appends to body
  });
  // -- END -- parce & process request
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201; // successful
    res.write(JSON.stringify(newUser));
    res.end();
  });
}

// not found HANDER
const not_found = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({message: 'Route not found'}));
  res.end();
}

const server = createServer((req, res) => {
  logger(req, res, () => {
    json_middleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET'){
        get_users(req, res);
      } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        get_userid(req, res);
      } else if (req.url === '/api/users' && req.method === 'POST'){
        create_user(req, res);
      } else {
        not_found(req, res);
      }
    }); 
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});