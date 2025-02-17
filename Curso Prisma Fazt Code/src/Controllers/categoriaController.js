const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


async function obtenerCategorias(req, res) {
    try{
        const categorias = await prisma.categoria.findMany();
        res.json(categorias);        
    }catch(error){
        console.log(error);
    }
  
}

async function crearCategoria(req, res) {
    try {
       const categoria= await prisma.categoria.create({
        data: {
            nombre_categoria: req.body.nombre_categoria,
            descripcion: req.body.descripcion,
            
        }
       
       });
       res.json(
        {
            message: "Categoria creada",
            categoria: categoria
        }

       )
    } catch (error) {
        console.log(error);
    }
}






module.exports = {
    obtenerCategorias,
    crearCategoria
}