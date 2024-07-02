import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() will return the last portion of a path
console.log(path.basename(filePath));
// directory
console.log(path.dirname(filePath));
// extname
console.log(path.extname(filePath));
// parse - will give an object with all ^
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

const filePath3 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);