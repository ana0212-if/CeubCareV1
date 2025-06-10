let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function renderCalendar(month = currentMonth, year = currentYear) {
    const calendarContainer = document.getElementById('calendar-container');
    calendarContainer.innerHTML = '';

    currentMonth = month;
    currentYear = year;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Domingo, 1 = Segunda, ...

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const calendarHeader = document.createElement('div');
    calendarHeader.classList.add('calendar-header');
    calendarHeader.innerHTML = `
        <button onclick="changeMonth(-1)">←</button>
        <span>${monthNames[month]} ${year}</span>
        <button onclick="changeMonth(1)">→</button>
    `;
    calendarContainer.appendChild(calendarHeader);

    // Adicionar células vazias para o primeiro dia da semana
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        calendarContainer.appendChild(emptyCell);
    }

    // Adicionar os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;

        const currentDate = new Date(year, month, day).toISOString().slice(0, 10);
        const hasAppointment = appointments.some(appt => appt.date === currentDate);
        if (hasAppointment) {
            dayCell.classList.add('has-appointment');
        }

        dayCell.addEventListener('click', function() {
            // Lógica para mostrar detalhes das consultas no dia clicado (se houver)
            console.log(`Dia ${day}/${month + 1}/${year} clicado`);
        });

        calendarContainer.appendChild(dayCell);
    }
}

function changeMonth(direction) {
    if (direction === -1) {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    } else if (direction === 1) {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }
    renderCalendar(currentMonth, currentYear);
}

// Simulação de consultas marcadas (será obtido do backend) - MOVI PARA O calendar.js PARA ESCOPO
const appointments = [
    { date: '2025-05-05', time: '10:00', doctor: 'Dr. Exemplo' },
    { date: '2025-05-15', time: '14:30', doctor: 'Dra. Outra' },
    { date: '2025-04-30', time: '16:00', doctor: 'Você Mesmo' } // Consulta no dia atual para teste
];

// Chamar a função renderCalendar inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const calendarButton = document.getElementById('calendar-button');
    if (calendarButton) {
        calendarButton.addEventListener('click', () => {
            const calendarSection = document.getElementById('calendar-section');
            if (calendarSection) {
                calendarSection.style.display = 'block';
                renderCalendar();
                displayAppointments(appointments); // Certifique-se que displayAppointments está acessível aqui ou mova para dashboard.js
            }
        });
    }
});

// Função para exibir as consultas na lista abaixo do calendário
function displayAppointments(appointments) {
    const appointmentsList = document.getElementById('appointments');
    if (!appointmentsList) return; // Verifica se o elemento existe

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