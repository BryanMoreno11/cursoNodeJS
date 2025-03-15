const { Router }=  require("express");
const router= Router();
const { crearUsuario, login }=  require("../../Controllers/usuarioController");
router.post("/register", crearUsuario);
router.post("/login", login);
module.exports = router;