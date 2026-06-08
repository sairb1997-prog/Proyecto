import express from 'express';
import routeUsuario from './app/routes/routes.usuario.js';
import routeAuth from './app/routes/routes.auth.js';
import cors from "cors";


const app = express();
const PORT = 3000;


//const secretKey= process.env.JWT_SECRET 


//console.log(secretKey);
// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor funcionando correctamente' });
});

app.use('/api', routeUsuario);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Registrar rutas de autenticación PRIMERO
app.use('/api', routeAuth);

// Luego las rutas del CRUD
app.use('/api', routeUsuario);



