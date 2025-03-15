const {Sequelize} = require('sequelize');
const conexionSequelize= new Sequelize(
    {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password:process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging:false,
        define: {
            timestamps: false,
        }
    }
   
);
module.exports = conexionSequelize;