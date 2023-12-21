const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Obtén la ruta del archivo solicitado
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

  // Verifica si el archivo existe
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Lee el archivo y envía su contenido como respuesta
      fs.readFile(filePath, (error, content) => {
        if (error) {
          res.writeHead(500);
          res.end('Internal Server Error');
        } else {
          res.writeHead(200, { 'Content-Type': getContentType(filePath) });
          res.end(content, 'utf-8');
        }
      });
    } else {
      // Si el archivo no existe, responde con un código 404
      res.writeHead(404);
      res.end('File Not Found');
    }
  });
});

// Escucha en el puerto 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Función para obtener el tipo de contenido según la extensión del archivo
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    default:
      return 'application/octet-stream';
  }
}
