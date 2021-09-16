const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_TOKEN, API_URL } = require('../apiConfig/config.ts');

const port = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`Got ${req.method} on ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

const apiProxy = createProxyMiddleware('/api',
  {
    changeOrigin: true,
    headers: {
      Authorization: API_TOKEN
    },
    target: API_URL,
    pathRewrite: (path, req) => req.url.slice(4)
  });
app.use(apiProxy);

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port + '/');
});
