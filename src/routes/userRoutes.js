// Paso 8: Rutas de usuario (src/routes/userRoutes.js)
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddLeware');

router.post('/register', userController.register);
router.post('/login', userController.login);

// Ruta protegida de ejemplo
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'Perfil de usuario', userId: req.userData.userId });
});

module.exports = router;