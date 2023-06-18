document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtenha os valores dos campos de entrada
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Crie o objeto de dados para enviar na requisição
        const data = {
            entidade: {
                nome: "Johson",
                nomePai: "Pai",
                NomeMae: "Mãe",
                email: "robson.santana.soares@gmail.com",
                senha: "123456",
                telefones: [{
                    Numero: "11987654567",
                    TipoTelefone: 1
                }],
                endereco: {
                    logradouro: "RUA DAS CRIANÇAS",
                    CEP: "32489-987",
                    numero: 50,
                    nidade: {
                        nome: "SP",
                        estado: {
                            nome: "SP",
                            id: 0
                        }
                    },
                    cidade: {
                        nome: "SP",
                        estado: {
                            nome: "SP",
                            id: 0
                        }
                    }
                }
            },
            operacao: "SALVAR"
        };

        // Realize a requisição AJAX para fazer o login
        fetch('https://localhost:7210/Candidato/salvarCandidato', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                // Processar a resposta do servidor
                if (Object.keys(data.data.entidades).length > 0) {
                    // Login bem-sucedido
                    window.location.href = './homepage.html';
                    // Redirecionar para outra página, fazer outras ações, etc.
                } else {
                    console.log(data)
                    // Login inválido
                    // Limpar os campos de entrada, se necessário
                    document.getElementById('email').value = '';
                    document.getElementById('password').value = '';
                }
            })
            .catch(error => {
                // Lidar com erros na requisição
                console.error('Erro na requisição:', error);
            });
    });


});