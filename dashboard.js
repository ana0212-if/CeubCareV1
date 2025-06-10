document.addEventListener('DOMContentLoaded', function() {
    const calendarButton = document.getElementById('calendar-button');
    const accountSettingsButton = document.getElementById('account-settings-button');
    const medicalRecordsButton = document.getElementById('medical-records-button');
    const medicalReportButton = document.getElementById('medical-report-button');

    const calendarSection = document.getElementById('calendar-section');
    const accountSettingsSection = document.getElementById('account-settings-section');
    const medicalRecordsSection = document.getElementById('medical-records-section');
    const medicalReportSection = document.getElementById('medical-report-section');

    // Simulação de dados do usuário (será obtido do backend)
    const userData = {
        name: 'Nome do',
        lastname: 'Usuário',
        createdAt: '2025-04-30',
        email: 'usuario@email.com'
    };

    // Simulação de consultas marcadas (será obtido do backend)
    const appointments = [
        { date: '2025-05-05', time: '10:00', doctor: 'Dr. Exemplo' },
        { date: '2025-05-15', time: '14:30', doctor: 'Dra. Outra' }
    ];

    // Simulação de relatórios médicos salvos (para médicos)
    const medicalReports = [
        { patient: 'Paciente A', date: '2025-04-25', diagnosis: '...', treatment: '...' },
        { patient: 'Paciente B', date: '2025-04-28', diagnosis: '...', treatment: '...' }
    ];

    // Função para mostrar/esconder seções
    function showSection(section) {
        calendarSection.style.display = 'none';
        accountSettingsSection.style.display = 'none';
        medicalRecordsSection.style.display = 'none';
        medicalReportSection.style.display = 'none';
        if (section) {
            section.style.display = 'block';
        }
    }

    // Event listeners para os botões
    calendarButton.addEventListener('click', function() {
        showSection(calendarSection);
        renderCalendar(); // Função a ser implementada em calendar.js
        displayAppointments(appointments);
    });

    accountSettingsButton.addEventListener('click', function() {
        showSection(accountSettingsSection);
        document.getElementById('account-name').textContent = userData.name;
        document.getElementById('account-lastname').textContent = userData.lastname;
        document.getElementById('account-created-at').textContent = userData.createdAt;
        document.getElementById('account-email').textContent = userData.email;
    });

    medicalRecordsButton.addEventListener('click', function() {
        showSection(medicalRecordsSection);
        // Lógica específica para médicos (verificar tipo de usuário)
    });

    medicalReportButton.addEventListener('click', function() {
        showSection(medicalReportSection);
        // Lógica para salvar relatório médico (para médicos)
        const reportForm = document.getElementById('medical-report-form');
        const reportsList = document.getElementById('reports-list');

        reportForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const patientName = document.getElementById('patient-name').value;
            const reportDate = document.getElementById('report-date').value;
            const diagnosis = document.getElementById('diagnosis').value;
            const treatment = document.getElementById('treatment').value;

            const newReport = { patient: patientName, date: reportDate, diagnosis: diagnosis, treatment: treatment };
            medicalReports.push(newReport);
            displayReports(medicalReports);
            reportForm.reset(); // Limpar o formulário
        });

        displayReports(medicalReports);
    });

    // Inicialmente mostrar a seção de boas-vindas ou a primeira seção por padrão
    showSection(null); // Esconde todas as seções no início

    // Função para exibir as consultas no calendário (a ser implementada em calendar.js)
    function displayAppointments(appointments) {
        const appointmentsList = document.getElementById('appointments');
        appointmentsList.innerHTML = '';
        appointments.forEach(appointment => {
            const listItem = document.createElement('li');
            listItem.textContent = `${appointment.date} às ${appointment.time} com ${appointment.doctor} - <button class="cancel-button" data-date="${appointment.date}">Cancelar</button>`;
            appointmentsList.appendChild(listItem);
        });

        const cancelButtons = document.querySelectorAll('.cancel-button');
        cancelButtons.forEach(button => {
            button.addEventListener('click', function() {
                const appointmentDate = this.dataset.date;
                // Lógica para cancelar a consulta (enviar ao backend)
                alert(`Consulta de ${appointmentDate} cancelada (simulação)`);
                // Remover da lista (apenas no frontend para simulação)
                this.parentNode.remove();
            });
        });
    }

    // Função para exibir os relatórios médicos salvos
    function displayReports(reports) {
        const reportsList = document.getElementById('reports-list');
        reportsList.innerHTML = '';
        reports.forEach(report => {
            const listItem = document.createElement('li');
            listItem.textContent = `${report.patient} - ${report.date} - Diagnóstico: ${report.diagnosis.substring(0, 20)}...`;
            reportsList.appendChild(listItem);
        });
    }
});