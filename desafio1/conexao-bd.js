// config/database.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nome_do_banco_de_dados", "nome_de_usuario", "senha", {
    host: "endpoint_do_banco_de_dados",
    dialect: "postgres", // Ou "mysql" se estiver usando o MySQL
})

module.exports = sequelize;
