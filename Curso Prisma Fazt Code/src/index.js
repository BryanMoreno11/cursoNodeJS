const express= module.require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//rutas
const videojuegoRoutes = require('./Routes/videojuegoRoutes');
const categoriaRoutes = require('./Routes/categoriaRoutes');
app.use('/api', videojuegoRoutes);
app.use('/api', categoriaRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});