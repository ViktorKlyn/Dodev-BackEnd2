import axios from "axios";

axios.get("https://api.exemplo.com/dados")
    .then(response => {
        // Manipula os dados recebidos
        console.log(response.data);
    })
    .catch(error => {
        // Captura e trata erros de requisição
        console.error('Requisição falhou:', error);
    });