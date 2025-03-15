require('dotenv').config();
const conexionSequelize = require('./sequelize/index');
const express = require('express');
const cors = require('cors');
const app= express();
const {PORT}=require('./config');
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//rutas
app.use("/api", require("./Routes/Usuario"));
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto 3000`);
});
conexionSequelize.authenticate();
