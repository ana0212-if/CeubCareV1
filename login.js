document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Simulação de login válido
        if (email && senha) {
            localStorage.setItem("usuarioLogado", "true");

            const agendamentoPendente = localStorage.getItem("agendamentoPendente");

            if (agendamentoPendente === "true") {
                const especialidade = localStorage.getItem("especialidadeTemp");
                const campus = localStorage.getItem("campusTemp");

                // Limpa os dados temporários
                localStorage.removeItem("agendamentoPendente");
                localStorage.removeItem("especialidadeTemp");
                localStorage.removeItem("campusTemp");

                window.location.href = `agendamento.html?especialidade=${especialidade}&campus=${campus}`;
            } else {
                window.location.href = "index.html";
            }
        } else {
            alert("Preencha e-mail e senha para continuar.");
        }
    });
});
