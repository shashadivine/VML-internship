// can encrypt data, create hashes, etc.

import crypto from 'crypto';

// to create a HASH createHash('algorithm u wanna put in')
// e.g. before putting passwords into databases, hash it for security purposes
const hash = crypto.createHash('sha256');
hash.update('password1234'); // adding data to the hash object
console.log(hash.digest('hex')); // hexidecimal format

// generate random cryptographically strong data | can be used to generate userID's
// (size, callback)
// buffer = object that contains the generated random bytes
crypto.randomBytes(16, (err, buf) => {
  if (err) throw err;
  console.log(buf.toString('hex'))
});

// encyrpting and decrypting data | plain text -> cypher text
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// --- ENCRYPT ---
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// --- DECRYPT ---
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);