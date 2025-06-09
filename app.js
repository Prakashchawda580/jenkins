const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello from Jenkins CI/CD!');
});
server.listen(3000);
