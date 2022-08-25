const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const appData = require('./data');

server.get('/api/users', (req, res, next) => {
  res.status(200).send(appData.getUsers);
});

server.get('/api/conference', (req, res, next) => {
  res.status(200).send(appData.getConference);
});

server.get('/api/products', (req, res, next) => {
  res.status(200).send(appData.getProducts);
});

server.listen(3000, () => {
  console.log('JSON server listening on port 3000');
});

