// --- URL MODULES ---

import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

const urlObj = new URL(urlString);

console.log(urlObj);