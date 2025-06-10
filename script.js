function redirecionarAgendamento() {
    const especialidade = document.getElementById('especialidade').value;
    const campus = document.getElementById('campus').value;

    if (!especialidade || !campus) {
        alert("Por favor, selecione a especialidade e o campus.");
        return;
    }

    // Salva temporariamente as escolhas
    localStorage.setItem("especialidadeTemp", especialidade);
    localStorage.setItem("campusTemp", campus);

    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        // Login será feito para continuar agendamento
        localStorage.setItem("agendamentoPendente", "true");
        window.location.href = "login.html";
    } else {
        redirecionarParaAgendamento(especialidade, campus);
    }
}

function redirecionarParaAgendamento(especialidade, campus) {
    const url = `agendamento.html?especialidade=${especialidade}&campus=${campus}`;
    window.location.href = url;
}
