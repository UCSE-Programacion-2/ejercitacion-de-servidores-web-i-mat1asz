/**
 * Pruebas para el servidor HTTP
 */
const request = require('supertest');
const server = require('../index');

// Cerrar el servidor después de todas las pruebas
afterAll((done) => {
  server.close(done);
});

describe('Pruebas del servidor HTTP', () => {
  // Prueba para la ruta raíz
  test('GET / debería devolver "Bienvenid@s! Gracias por tu visita."', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Bienvenid@s! Gracias por tu visita.');
    expect(response.headers['content-type']).toMatch(/text\/plain/);
    expect(response.headers['content-type']).toMatch(/charset=utf-8/);
  });

  // Prueba para la ruta /nosotros
  test('GET /nosotros debería devolver "Bienvenid@s a saber + de nosotros :)"', async () => {
    const response = await request(server).get('/nosotros');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Bienvenid@s a saber + de nosotros :)');
    expect(response.headers['content-type']).toMatch(/text\/plain/);
    expect(response.headers['content-type']).toMatch(/charset=utf-8/);
  });

  // Prueba para la ruta /cursos
  test(
    'GET /cursos debería devolver "Te interesan nuestros cursos. Vení a conocer la oferta!"',
    async () => {
      const response = await request(server).get('/cursos');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Te interesan nuestros cursos. Vení a conocer la oferta!');
      expect(response.headers['content-type']).toMatch(/text\/plain/);
      expect(response.headers['content-type']).toMatch(/charset=utf-8/);
    },
  );

  // Prueba para la ruta /contacto
  test(
    'GET /contacto debería devolver "Si querés contactarnos, hacelo a este Email: :)"',
    async () => {
      const response = await request(server).get('/contacto');
      expect(response.status).toBe(200);
      expect(response.text).toBe('Si querés contactarnos, hacelo a este Email: :)');
      expect(response.headers['content-type']).toMatch(/text\/plain/);
      expect(response.headers['content-type']).toMatch(/charset=utf-8/);
    },
  );

  // Prueba para rutas no existentes
  test('GET /ruta-no-existente debería devolver 404 y un mensaje de error', async () => {
    const response = await request(server).get('/ruta-no-existente');
    expect(response.status).toBe(404);
    expect(response.text).toBe('No se ha encontrado la ruta ingresada.');
    expect(response.headers['content-type']).toMatch(/text\/plain/);
    expect(response.headers['content-type']).toMatch(/charset=utf-8/);
  });
});
