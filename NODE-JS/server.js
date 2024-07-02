import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// const PORT = process.env.PORT;

// -- GET CURRENT PATH --
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname();

// method create server
const server = http.createServer(async(req, res) => {
  try{
    if (req.method == 'GET'){
      let filePath;
      if (req.url === '/'){
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about'){
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        throw new Error('Not Found')
      }

      const data = await fs.readFile(filePath) // readfile method in fs module
      res.setHeader('Content-Type', 'text.html');
      res.write(data); // = the file
      res.end();

        } else {
          throw new Error('Method Not Allowed');
        }
      } catch (error){
        res.writeHead(500, {'Content-Type': text/html});
        res.end('Server Error');
      }
  });

// needs listen for ^ to do something
// 8000 = port
server.listen(PORT, () => {
  // function for it to connect
  // this arrow function is a callback function bc it is called when the server starts listening
  console.log(`Server is running on port ${PORT}`);
});