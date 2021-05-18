require('dotenv').config();

const http = require('http');
const routes = require('./app/src/routes/routes');

const server = http.createServer((req, res) => {
  const url = req.url.split()[0];

  if (url in routes) {
    console.log(url);
    routes[url](req, res);
  } else {
    routes['404'](req, res);
  }
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
