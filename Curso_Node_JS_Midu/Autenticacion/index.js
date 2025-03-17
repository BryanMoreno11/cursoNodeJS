require('dotenv').config();
const conexionSequelize = require('./sequelize/index');
const express = require('express');
const cors = require('cors');
const cookieParser= require("cookie-parser");
const jwt= require('jsonwebtoken');
const app= express();
const {PORT}=require('./config');
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//Este es un middleware personalizado para verificar el token
app.use((req, res, next)=>{
    const token= req.cookies.access_token;
    req.session={user:null};
    try{
        if(token){
            const data= jwt.verify(token, process.env.JWT_SECRET);
            req.session.user= data;
        }
    }catch(error){
    }
    next(); //->Pasa a la siguiente ruta o middleware
});
//motor de plantillas
app.set('view engine', 'ejs');
//rutas
app.get('/', (req, res)=>{
    const {user}= req.session;
    res.render('index', user);
});

app.get('/protected', (req, res)=>{
    const {user}= req.session;
    if(!user){
        return res.send("No tienes acceso a esta ruta");
    }
    try{
        res.render('protected', user);
    }catch(error){
        console.log("Error al verificar el token");
        res.send("No tienes acceso a esta ruta");
    }
});

app.use("/api", require("./Routes/Usuario"));
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto 3000`);
});

app.post('/logout', (req, res)=>{
    res.clearCookie('access_token');
    res.json({
        message: "Sesión cerrada correctamente"
    });
});

conexionSequelize.authenticate();
