const { Router } = require("express");
const { 
    obtenerVideojuegos,
    crearVideojuego,
    actualizarVideojuego,
    eliminarVideojuego
 } = require("../Controllers/videojuegoController");


const router= Router();

router.get('/videojuegos',obtenerVideojuegos );
router.post('/videojuegos',crearVideojuego );
router.put('/videojuegos/:id',actualizarVideojuego );
router.delete('/videojuegos/:id',eliminarVideojuego );





module.exports= router;