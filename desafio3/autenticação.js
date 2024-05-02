// Middleware de autenticação

const authenticateUser = (req, res, next) => {
    // Simulando autenticação
    const { username, password} = req.query // Supondo que as credenciais estão sendo enviadas via query string
    const user = users.find(u => u.username === username && u.password === password)

    if (user) {
        // Se o usuario for autenticado com sucesso, prosseguir para a proxima rota
        req.user = user; // Adiciona o usuário autenticado ao objeto de requisição para uso posterior
        next()
    } else {
        // Se as credenciais estiverem incorretas, retornar um erro de autenticação
        res.status(401).send('Credenciais inválidas. Por favor, faça loggin para acessar esta rota.')
    }
}

// Rota protegida
app.get('/perfil', authenticateUser, (req, res) => {
    // Se o middleware de autenticação passar, o usuário terá acesso a esta rota
    res.send(`Bem-vindo ao seu perfil, ${req.user.username}!`)
})