fetch("https://api.exemplo.com/dados")
    .then(response => {
        // Verifica se a resposta foi bem-sucedida
        if(!response.ok) {
            throw new Error('Resposta da rede não foi bem-sucedida');
        }
        // Converte a resposta para JSON
        return response.json();
    })
    .then(data => {
        // Manipula os dados recebidos
        console.log(data);
    })
    .catch(error => {
        // Captura e trata erros de requisição
        console.error("Erro na requisição:", error)
    });
    