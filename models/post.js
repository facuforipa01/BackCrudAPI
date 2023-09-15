const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
   /*// idUser: {
        type: DataTypes.INTEGER,
        forignKey: true, //no se si se define asi una clave foranea xd
        allowNull: false, // si o si la tiene que haber hecho alguien
        unique: false //pueden haber muchos posts de un mismo user
        //idUser es la clave primaria en usuarios que tiene que estar vinculada con posteos
    },*/
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        unique: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    ubicacion: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
    }

},
    {
        sequelize,
        modelName: 'Post'
    });


Post.sync()
    .then(() => {
        console.log('La tabla de Publicaciones ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de Publicaciones: ', error);
    });

module.exports = Post;