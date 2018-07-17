const { getPath }= require('./router');
const { getType }= require('./router');
const fs = require('fs');

function handler(req, res) {
    let endpoint = req.url;
    sendFile(endpoint);

    function sendFile(endpoint) {
        fs.readFile(getPath(endpoint), function (err, file) {
            if (err) {
                throw err;
                return;
            }
            res.writeHead(200, {
                'content-type': getType(endpoint)
            });
            res.write(file);
            res.end();
        });
    }
}

module.exports = handler;