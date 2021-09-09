const express = require('express');
const path = require('path');

const port = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`Got ${req.method} on ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port + '/');
});