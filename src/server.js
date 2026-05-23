/**
 * Módulo que crea y configura el servidor HTTP
 */
const http = require('http');

/**
 * Crea un servidor HTTP que utiliza la función router para manejar las solicitudes
 * @returns {http.Server} Instancia del servidor HTTP
 */
function createServer() {
  const routes = {
    '/': 'Bienvenid@s! Gracias por tu visita.',
    '/nosotros': 'Bienvenid@s a saber + de nosotros :)',
    '/cursos': 'Te interesan nuestros cursos. Vení a conocer la oferta!',
    '/contacto': 'Si querés contactarnos, hacelo a este Email: :)',
  };

  const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (routes[req.url] !== undefined) {
      res.writeHead(200);
      res.end(routes[req.url]);
    } else {
      res.writeHead(404);
      res.end('No se ha encontrado la ruta ingresada.');
    }
  });

  return server;
}

module.exports = createServer;
