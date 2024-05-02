// Migrations-seeds

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Usuários", [
            {
                nome: "João",
                email: "joao123@gmail.com",
                idade: 30,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nome: "Maria",
                email: "maria123@gmail.com",
                idade: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Usuários", null);
    }
};
