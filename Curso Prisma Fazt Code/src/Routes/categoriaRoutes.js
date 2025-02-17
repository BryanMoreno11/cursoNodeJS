const { Router } = require("express");

const router= Router();
const {obtenerCategorias, crearCategoria} = require("../Controllers/categoriaController");
router.get('/categorias',obtenerCategorias );
router.post('/categorias',crearCategoria );
module.exports= router;