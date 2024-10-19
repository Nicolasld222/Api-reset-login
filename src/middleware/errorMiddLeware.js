// Paso 7: Middleware de manejo de errores (src/middleware/errorMiddleware.js)
module.exports = (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ message: 'Algo salió mal!' });
  };