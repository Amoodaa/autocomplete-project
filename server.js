const http = require('http');
const handler = require('./src/handler');
const port = process.env.PORT || 3000;

http.createServer(handler).listen(port, function () {
    console.log(`Server is running on http://localhost:${port}`);
});