function getPath(endpoint) {
    if (typeof endpoint === 'string') {
        let fileName = endpoint.substring(endpoint.lastIndexOf('/') + 1);
        switch (fileName) {
            case '':
                return './public/' + 'index.html';
                break;
            case 'main.css':
            case 'script.js':
                return './public/' + fileName;
                break;
            default:
                throw new Error('not supported or not valid');
        }
    }
}

function getType(endpoint) {
    if (typeof endpoint === 'string') {
        if (endpoint == '/') return 'text/html';
        let fileExtention = endpoint.substring(endpoint.lastIndexOf('.') + 1);
        switch (fileExtention) {
            case "css":
                return 'text/css';
                break;
            case "js":
                return 'application/javascript';
                break;
            case "jpg" || "jpeg":
                return 'image/jpeg';
                break;
            case "png":
                return 'image/png';
                break;
            case "txt":
                return 'text/plain';
                break;
            case "json":
                return 'application/json';
                break;
            default:
                throw err;
        }
    } else {
        throw err;
        return;
    }
}

module.exports = {
    getPath,
    getType
};