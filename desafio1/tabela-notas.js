const { DataTypes } = require("sequelize");
const sequelize = require("./conexao-bd");
const Usuario = require("./usuarios");

// Modelo de notas
const Nota = sequelize.define("Nota", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: DataTypes.INTEGER,
    disciplina: DataTypes.STRING 
});

Usuario.hasMany(Nota);
Nota.belongsTo(Usuario)