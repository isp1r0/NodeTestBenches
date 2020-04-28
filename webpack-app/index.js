const http = require('http');
const app = require('./app');

const { PORT = 3000, HOST = 'localhost' } = process.env;

module.exports = http.createServer(app).listen(PORT, HOST, function listener() {
  const { address, port } = this.address();
  // eslint-disable-next-line no-console
  console.log('Server listening on http://%s:%d', address, port);
});
