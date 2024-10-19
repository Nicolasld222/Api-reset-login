const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

// Middleware de seguridad
app.use(helmet());

// Habilitar CORS para todas las rutas
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

module.exports = app;  // Exporta la instancia de app
