const SqlModule = require("../sequelize/models/index");
const bcrypt = require("bcrypt");
const {SALT_ROUNDS} = require("../config");
async function crearUsuario(req, res) {
  try {
    //validaciones
    if (!req.body?.username || !req.body?.password) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    let usuarioValidacion = validaciones(req.body.username, req.body.password);
    if (usuarioValidacion) {
      return res.status(400).json({ error: usuarioValidacion });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    req.body.password = hashedPassword;
    await SqlModule.Usuario.create(req.body)
      .then(() => {
        res.status(201).json({ message: "Usuario creado exitosamente" });
      })
      .catch((error) => {
        if (error.name === "SequelizeUniqueConstraintError") {
          return res.status(400).json({ error: "El usuario ya existe" });
        }

        return res.status(404).json({ error: error });
      });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor" });
  }
}

async function login(req, res) {
  if (!req.body?.username || !req.body?.password) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  let usuarioValidacion = validaciones(req.body.username, req.body.password);
  if (usuarioValidacion) {
    return res.status(400).json({ error: usuarioValidacion });
  }
  const usuario = await SqlModule.Usuario.findOne({
    where: { username: req.body.username },
  });
  if (!usuario) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }
  const isValidPassword = await bcrypt.compare(
    req.body.password,
    usuario.password
  );
  if (!isValidPassword) {
    return res.status(401).json({ error: "Contraseña incorrecta" });
  }
  return res.status(200).json({
    username: usuario.username,
  });
}

function validaciones(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return "Los campos deben ser de tipo string";
  }
  if (password.length < 10) {
    return "La contraseña debe tener al menos 10 caracteres";
  }
  return null;
}

module.exports = {
  crearUsuario,
  login,
};
