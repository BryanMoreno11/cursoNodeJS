const sequelize= require('../index');
const {DataTypes} = require('sequelize');

const Usuario= sequelize.define('Usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING(500),
        allowNull: false
    }
},
{
    tableName: 'usuario',
    timestamps: false
}
);

const SqlModule={
    Usuario
}
module.exports = SqlModule;