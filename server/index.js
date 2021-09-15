const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const { API_TOKEN, API_URL } = require('../../../apiConfig/config');


const port = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`Got ${req.method} on ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
// app.use(cors({
//   origin: 'http://127.0.0.1:8080'
//   origin: '*'
// }
// ));
// app.options('*', cors());
// app.use(cors(['http://localhost:8080', 'http://localhost:9001/api/']));

// https://app-hrsei-api.herokuapp.com/api/fec2/hr-den
const apiProxy = proxy('/api/fec2/hr-den/', {
  headers: {
    Authorization: API_TOKEN
  },
  target: API_URL,
  changeOrigin: true
});
app.use(apiProxy);


app.listen(port, () => {
  console.log('Listening on http://localhost:' + port + '/');
});
