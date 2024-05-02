const { Sequelize } = require("sequelize");
const sequelize = require("./conexao-bd");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Usuários", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            idade: Sequelize.INTEGER
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Usuários");
    }
};
