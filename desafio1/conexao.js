// conexão com banco de dadoss
const sequelize = require("./config/database")
const Usuario = require("./models/Usuario")


try{
    await sequelize.authenticate(); // Verifica a conexão com o banco de dados
    console.log("Conexão com o banco de dados estabelecida com sucesso! ");

    await Usuario.sync() // Crie a tabela do usuário se ela não existir


    const novoUsuario = await Usuario.create({ // C
        nome: "Klein",
        email: "klein123@gmail.com",
        senha: "klein123"
    })

    const usuarios = await Usuario.findAll(); // R
    console.log("Lista de usuários:", usuarios.map((u) => u.toJSON()))

    const usuario = await Usuario.findByPk(id); // U
    await usuario.update({ senha: "senha_forte" });
    console.log("Usuário autorizado com sucesso:", usuario.toJSON())

    const deletarUsuario = await Usuario.findByPk(id);
    await usuario.destroy();
    console.log("Usuário exlcuido com sucesso.")

} catch (error) {
    console.error('Erro ao conectar/inserir no banco de dados:', error);
} finally {
    sequelize.close(); // Fecha a conexão com o banco de dados
}