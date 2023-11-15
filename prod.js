const http = require('http');
const fs = require('fs');
const PORT = 8080;
const STATIC_ROOT = __dirname + '/build';

function contentType(url) {
  const contentTypes = {
    js: 'application/javascript',
    html: 'text/html',
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    map: 'application/octet-stream'
  };

  return contentTypes[url.split('.').pop()];
}

const server = http.createServer((req, res) => {
  let url = req.url.toLowerCase();

  if(url === '/') url = '/index.html' 

  const fileContent = fs.readFileSync(STATIC_ROOT + url);
  res.writeHead(200, {'Content-Type': contentType(url)});

  if(fileContent === null) return res.end('not found');
  return res.end(fileContent);
});

server.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}/`);
});