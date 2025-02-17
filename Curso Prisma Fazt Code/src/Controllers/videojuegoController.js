const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


async function obtenerVideojuegos(req, res) {
    try{
        const videojuegos = await prisma.videojuego.findMany();
        res.json(videojuegos);
        res        
    }catch(error){
        console.log(error);
    }
  
}

async function crearVideojuego(req, res){
    try {
        const videojuego = await prisma.videojuego.create({
            data: {
                nombre: req.body.nombre,
                precio: req.body.precio,
                id_categoria: req.body.id_categoria,
                fechaCreacion: new Date(),
                stock: req.body.stock,
            }
        });
        res.json({
            message: "Videojuego creado",
            videojuego: videojuego
        });
    } catch (error) {
        console.log(error);
    }
}

async function actualizarVideojuego(req, res){
    try {
        const videojuego = await prisma.videojuego.update({
           where:{
            id_videojuego: parseInt(req.params.id)
           },
           data:{
            nombre: req.body.nombre,
            precio: req.body.precio,
            id_categoria: req.body.id_categoria,
            stock: req.body.stock,
            descripcion: req.body.descripcion
           }
        });
        res.json({
            message: "Videojuego actualizado",
            videojuego: videojuego
        });
    } catch (error) {
        console.log(error);
    }
}

async function eliminarVideojuego(req,res){
    try{
        const videojuego= await prisma.videojuego.delete(
            {
                where:{
                    id_videojuego: parseInt(req.params.id)
                }
            }
        );
        res.json({
            message: "Videojuego eliminado",
            videojuego: videojuego
        }); 

    }catch(error){
        console.log(error);
    }
}






module.exports = {
    obtenerVideojuegos,
    crearVideojuego,
    actualizarVideojuego,
    eliminarVideojuego
}