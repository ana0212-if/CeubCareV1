document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-paciente-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nomeCompleto = document.getElementById('nome-completo').value;
        const ra = document.getElementById('ra').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Aqui você faria a chamada para a sua API de backend para cadastrar o paciente
        const dadosCadastro = {
            tipo: 'paciente',
            nomeCompleto: nomeCompleto,
            ra: ra,
            email: email,
            senha: senha
        };

        console.log('Dados de cadastro do paciente:', dadosCadastro);

        // Simulação de sucesso no cadastro
        alert('Cadastro realizado com sucesso! Redirecionando para a página de login...');
        window.location.href = 'login.html';

        // Em um cenário real, você lidaria com erros de cadastro vindos do backend
    });
});