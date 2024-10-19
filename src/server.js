require('dotenv').config();
const app = require('./app');  // Importa la configuración de Express desde app.js
const pool = require('./config/database');  // Importa el pool de conexiones MySQL

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
