// template engine
// we can pass in dynamic data 

import express from 'express';

const app = express();

// -- CONFIG EJS --
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  // will look for index file
  res.render('index', {
    title: 'Welcome',
    message: 'Hello from EJS',
    people: ['John', 'Jane', 'Jack']
  });
});

app.listen(8000, () => console.log('Server has started'));