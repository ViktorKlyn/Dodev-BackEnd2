const Usuario = require("./usuarios");

// Consulta
Usuario.findByPk(1, {
    include: Nota, // Especifica a inclusão do modelo de Nota
}).then((usuario) => {
    if (usuario) {
        console.log("Usuário:", usuario.toJSON());
        console.log("Notas do usuário:")
        usuario.Notas.forEach((nota) => {
            console.log("Disciplina:", nota.disciplina, "valor:", nota.valor);
        });
    } else {
        console.log("Usuário não encontrado.");
    }
});
