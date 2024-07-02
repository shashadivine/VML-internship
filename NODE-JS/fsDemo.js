// --- READING DATA ---
import fs from 'fs/promises';


// DEFAULT: readfile() - callback --- ASYNC ---

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error)
  }
};

// --- WRITING DATA --- this will overwrite currrent one
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Overwriting');
    console.log('File written');
  } catch (error) {
    console.log(error);
  }
};

// --- APPENDING DATA --- adds on the file, not overwrites it
const appendFile = async () => {
  try {
    await fs.writeFile('./test.txt', '\n Adding');
    console.log('File appended');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();