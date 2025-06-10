document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const especialidadeSelecionada = params.get('especialidade');
    const campusSelecionado = params.get('campus');

    document.getElementById('especialidade-selecionada').textContent = especialidadeSelecionada || 'Não especificada';
    document.getElementById('campus-selecionado').textContent = campusSelecionado || 'Não especificado';

    // Simulação de dados de médicos e horários (6 POR ESPECIALIDADE E CAMPUS)
    const medicosDisponiveis = [
        // ... (todas as especialidades e campus já listados anteriormente) ...

        // Odontologia Animal - Asa Norte (continuação)
        { nome: 'Dra. Beatriz Pereira (Odonto - AN)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'odontologia-animal', campus: 'asa-norte' },
        { nome: 'Dr. Rafael Souza (Odonto - AN)', horarios: ['09:30', '13:00', '16:00'], especialidade: 'odontologia-animal', campus: 'asa-norte' },
        { nome: 'Dra. Ana Silva (Odonto - AN)', horarios: ['10:30', '14:00', '16:30'], especialidade: 'odontologia-animal', campus: 'asa-norte' },

        // Odontologia Animal - Taguatinga
        { nome: 'Dr. Lucas Mendes (Odonto - TG)', horarios: ['08:00', '11:30', '15:00'], especialidade: 'odontologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Natália Pereira (Odonto - TG)', horarios: ['09:00', '12:30', '16:00'], especialidade: 'odontologia-animal', campus: 'taguatinga' },
        { nome: 'Dr. Bruno Gomes (Odonto - TG)', horarios: ['10:00', '13:30', '17:00'], especialidade: 'odontologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Amanda Rocha (Odonto - TG)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'odontologia-animal', campus: 'taguatinga' },
        { nome: 'Dr. Thiago Silva (Odonto - TG)', horarios: ['09:30', '13:00', '16:00'], especialidade: 'odontologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Carolina Oliveira (Odonto - TG)', horarios: ['10:30', '14:00', '16:30'], especialidade: 'odontologia-animal', campus: 'taguatinga' },

        // Endocrinologia Animal - Asa Norte
        { nome: 'Dra. Fernanda Lima (Endocrino - AN)', horarios: ['09:00', '13:30', '16:00'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },
        { nome: 'Dr. Gustavo Costa (Endocrino - AN)', horarios: ['10:00', '14:30', '17:00'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },
        { nome: 'Dra. Beatriz Pereira (Endocrino - AN)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },
        { nome: 'Dr. Rafael Souza (Endocrino - AN)', horarios: ['09:30', '13:00', '16:30'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },
        { nome: 'Dra. Ana Silva (Endocrino - AN)', horarios: ['10:30', '14:00', '17:30'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },
        { nome: 'Dr. Carlos Souza (Endocrino - AN)', horarios: ['08:00', '11:30', '15:00'], especialidade: 'endocrinologia-animal', campus: 'asa-norte' },

        // Endocrinologia Animal - Taguatinga
        { nome: 'Dr. Lucas Mendes (Endocrino - TG)', horarios: ['09:00', '13:30', '16:00'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Natália Pereira (Endocrino - TG)', horarios: ['10:00', '14:30', '17:00'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },
        { nome: 'Dr. Bruno Gomes (Endocrino - TG)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Amanda Rocha (Endocrino - TG)', horarios: ['09:30', '13:00', '16:30'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },
        { nome: 'Dr. Thiago Silva (Endocrino - TG)', horarios: ['10:30', '14:00', '17:30'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },
        { nome: 'Dra. Carolina Oliveira (Endocrino - TG)', horarios: ['08:00', '11:30', '15:00'], especialidade: 'endocrinologia-animal', campus: 'taguatinga' },

        // Neurologia Veterinária - Asa Norte
        { nome: 'Dr. Gustavo Costa (Neuro - AN)', horarios: ['11:00', '14:30', '17:00'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },
        { nome: 'Dra. Beatriz Pereira (Neuro - AN)', horarios: ['09:00', '12:30', '16:00'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },
        { nome: 'Dr. Rafael Souza (Neuro - AN)', horarios: ['10:00', '13:30', '17:30'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },
        { nome: 'Dra. Ana Silva (Neuro - AN)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },
        { nome: 'Dr. Carlos Souza (Neuro - AN)', horarios: ['09:30', '13:00', '16:30'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },
        { nome: 'Dra. Mariana Oliveira (Neuro - AN)', horarios: ['08:00', '11:30', '15:00'], especialidade: 'neurologia-veterinaria', campus: 'asa-norte' },

        // Neurologia Veterinária - Taguatinga
        { nome: 'Dr. Lucas Mendes (Neuro - TG)', horarios: ['11:00', '14:30', '17:00'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
        { nome: 'Dra. Natália Pereira (Neuro - TG)', horarios: ['09:00', '12:30', '16:00'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
        { nome: 'Dr. Bruno Gomes (Neuro - TG)', horarios: ['10:00', '13:30', '17:30'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
        { nome: 'Dra. Amanda Rocha (Neuro - TG)', horarios: ['08:30', '12:00', '15:30'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
        { nome: 'Dr. Thiago Silva (Neuro - TG)', horarios: ['09:30', '13:00', '16:30'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
        { nome: 'Dra. Carolina Oliveira (Neuro - TG)', horarios: ['08:00', '11:30', '15:00'], especialidade: 'neurologia-veterinaria', campus: 'taguatinga' },
    ];

    const listaMedicosDiv = document.getElementById('lista-medicos');
    const mensagemNenhumMedicoDiv = document.getElementById('mensagem-nenhum-medico');
    let encontrouMedicos = false;
    let horarioSelecionado = null;
    let medicoSelecionadoNome = null;
    const campusSelecionadoInfoElement = document.getElementById('campus-selecionado');
    const campusSelecionadoInfo = campusSelecionadoInfoElement ? campusSelecionadoInfoElement.textContent : '';

    listaMedicosDiv.innerHTML = ''; // Limpa a lista anterior
    mensagemNenhumMedicoDiv.style.display = 'none'; // Esconde a mensagem de "nenhum médico" inicialmente

    medicosDisponiveis.forEach(medico => {
        const matchesEspecialidade = !especialidadeSelecionada || medico.especialidade === especialidadeSelecionada;
        const matchesCampus = !campusSelecionado || medico.campus === campusSelecionado;

        if (matchesEspecialidade && matchesCampus) {
            encontrouMedicos = true;
            const medicoDiv = document.createElement('div');
            medicoDiv.classList.add('medico-disponivel');
            medicoDiv.innerHTML = `<h4>${medico.nome}</h4><p>Horários disponíveis:</p><div class="horarios-disponiveis"></div>`;
            const horariosDiv = medicoDiv.querySelector('.horarios-disponiveis');
            medico.horarios.forEach(horario => {
                const botaoHorario = document.createElement('button');
                botaoHorario.textContent = horario;
                botaoHorario.addEventListener('click', function() {
                    medicoSelecionadoNome = medico.nome;
                    horarioSelecionado = horario;
                    document.getElementById('medico-selecionado').textContent = medico.nome;
                    document.getElementById('horario-selecionado-info').textContent = horario;
                    document.getElementById('campus-selecionado-info').textContent = campusSelecionadoInfo;
                    document.getElementById('horario-consulta').value = horario;
                    document.getElementById('disponibilidade-medicos').style.display = 'none';
                    document.getElementById('informacao-consulta-selecionada').style.display = 'block';
                    document.getElementById('formulario-agendamento').style.display = 'block';
                });
                horariosDiv.appendChild(botaoHorario);
            });
            listaMedicosDiv.appendChild(medicoDiv);
        }
    });

    if (!encontrouMedicos && especialidadeSelecionada) {
        mensagemNenhumMedicoDiv.style.display = 'block';
        listaMedicosDiv.innerHTML = '<p class="warning-message">Nenhum médico encontrado para a especialidade e campus selecionados. Mostrando outras opções...</p>';
        medicosDisponiveis.forEach(medico => {
            if (medico.especialidade !== especialidadeSelecionada) {
                const medicoDiv = document.createElement('div');
                medicoDiv.classList.add('medico-disponivel');
                medicoDiv.innerHTML = `<h4>${medico.nome}</h4><p>Especialidade: ${medico.especialidade}<br>Horários disponíveis:</p><div class="horarios-disponiveis"></div>`;
                const horariosDiv = medicoDiv.querySelector('.horarios-disponiveis');
                medico.horarios.forEach(horario => {
                    const botaoHorario = document.createElement('button');
                    botaoHorario.textContent = horario;
                    botaoHorario.addEventListener('click', function() {
                        medicoSelecionadoNome = medico.nome;
                        horarioSelecionado = horario;
                        document.getElementById('medico-selecionado').textContent = medico.nome;
                        document.getElementById('horario-selecionado-info').textContent = horario;
                        document.getElementById('campus-selecionado-info').textContent = campusSelecionadoInfo;
                        document.getElementById('horario-consulta').value = horario;
                        document.getElementById('disponibilidade-medicos').style.display = 'none';
                        document.getElementById('informacao-consulta-selecionada').style.display = 'block';
                        document.getElementById('formulario-agendamento').style.display = 'block';
                    });
                    horariosDiv.appendChild(botaoHorario);
                });
                listaMedicosDiv.appendChild(medicoDiv);
            }
        });
    } else if (!encontrouMedicos) {
        listaMedicosDiv.innerHTML = '<p class="warning-message">Nenhum médico encontrado.</p>';
    }

    // Funções fora do loop forEach
    function confirmarAgendamento() {
        if (!medicoSelecionadoNome || !horarioSelecionado || !campusSelecionadoInfo) {
            alert('Por favor, selecione um horário antes de agendar.');
            return;
        }
        const confirmacao = confirm(`Deseja agendar a consulta com ${medicoSelecionadoNome} para o dia ${horarioSelecionado} no campus ${campusSelecionadoInfo}?`);
        if (confirmacao) {
            enviarAgendamento();
        }
    }

    window.confirmarAgendamento = confirmarAgendamento; // Tornar a função globalmente acessível

    function voltarParaDisponibilidade() {
        document.getElementById('informacao-consulta-selecionada').style.display = 'none';
        document.getElementById('formulario-agendamento').style.display = 'none';
        document.getElementById('disponibilidade-medicos').style.display = 'block';
        horarioSelecionado = null;
        medicoSelecionadoNome = null;
    }
    window.voltarParaDisponibilidade = voltarParaDisponibilidade;

    function enviarAgendamento() {
        if (!horarioSelecionado || !medicoSelecionadoNome) {
            alert('Por favor, selecione um horário.');
            return;
        }

        const nomeAnimal = document.getElementById('nome-animal').value;
        const nomeTutor = document.getElementById('nome-tutor').value;
        const emailTutor = document.getElementById('email-tutor').value;

        // Aqui você faria a lógica para enviar os dados do agendamento para o servidor
        console.log('Dados do agendamento:', {
            medico: medicoSelecionadoNome,
            horario: horarioSelecionado,
            campus: campusSelecionadoInfo,
            nomeAnimal: nomeAnimal,
            nomeTutor: nomeTutor,
            emailTutor: emailTutor
        });

        // Simulação de envio de código de verificação
        alert(`Um código de verificação foi enviado para o email: ${emailTutor}`);
        document.getElementById('form-agendamento').style.display = 'none';
        document.getElementById('informacao-consulta-selecionada').style.display = 'none';
        document.getElementById('mensagem-confirmacao').style.display = 'block';
    }
    window.enviarAgendamento = enviarAgendamento;

    function validarAgendamento() {
        const codigoInserido = document.getElementById('codigo-verificacao').value;
        // Aqui você faria a lógica para validar o código com o servidor
        if (codigoInserido === '123456') { // Simulação de código correto
            document.getElementById('mensagem-validacao').textContent = 'Agendamento concluído com sucesso!';
            // Redirecionar para a página de confirmação ou dashboard
        } else {
            document.getElementById('mensagem-validacao').textContent = 'Código de verificação inválido.';
        }
    }
    window.validarAgendamento = validarAgendamento;
});

