const http = require('http');
const app = require('./app/app')
const PORT = process.env.PORT || 5000;

// Run the server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT)
});