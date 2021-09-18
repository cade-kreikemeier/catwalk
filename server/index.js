const express = require('express');
const path = require('path');
const ExpressCache = require('express-cache-middleware');
const cacheManager = require('cache-manager');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_TOKEN, API_URL } = require('../apiConfig/config.ts');
// const cors = require('cors');

const port = 9001;
const app = express();

const cacheMiddleware = new ExpressCache(
  cacheManager.caching({
    store: 'memory', max: 10000, ttl: 3600
  })
);

cacheMiddleware.attach(app);

// app.use(cors());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

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
    pathRewrite: (_path, req) => req.url.slice(4)
  });

app.use(apiProxy);

app.listen(port, () => {
  console.log('Listening on http://localhost:' + port + '/');
});
