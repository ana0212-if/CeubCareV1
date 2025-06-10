document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-medico-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nomeCompleto = document.getElementById('nome-completo').value;
        const especialidade = document.getElementById('especialidade').value;
        const campus = document.getElementById('campus').value;
        const ra = document.getElementById('ra').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Aqui você faria a chamada para a sua API de backend para cadastrar o médico
        const dadosCadastro = {
            tipo: 'medico',
            nomeCompleto: nomeCompleto,
            especialidade: especialidade,
            campus: campus,
            ra: ra,
            email: email,
            senha: senha
        };

        console.log('Dados de cadastro do médico:', dadosCadastro);

        // Simulação de sucesso no cadastro
        alert('Cadastro realizado com sucesso! Redirecionando para a página de login...');
        window.location.href = 'login.html';

        // Em um cenário real, você lidaria com erros de cadastro vindos do backend
    });
});