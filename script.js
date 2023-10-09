// script.js
import { jsPDF } from "jspdf";

document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const checkinDate = document.getElementById('checkinDate').value;
    const checkoutDate = document.getElementById('checkoutDate').value;
    const roomType = document.getElementById('roomType').value;

    const reservationDetails = `
        <h2>Detalhes da Reserva</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Data de Check-in:</strong> ${checkinDate}</p>
        <p><strong>Data de Check-out:</strong> ${checkoutDate}</p>
        <p><strong>Tipo de Quarto:</strong> ${roomType}</p>
        <button onclick="exportToPDF()">Exportar para PDF</button>
    `;

    document.getElementById('reservationDetails').innerHTML = reservationDetails;
    document.getElementById('reservationDetails').removeAttribute('hidden');
});

function exportToPDF() {
    const doc = new jsPDF();
    
    const details = `
        Nome: ${document.getElementById('name').value}
        Data de Check-in: ${document.getElementById('checkinDate').value}
        Data de Check-out: ${document.getElementById('checkoutDate').value}
        Tipo de Quarto: ${document.getElementById('roomType').value}
    `;

    doc.text(details, 10, 10);
    doc.save('reserva-hotel-agrocp.pdf');
}
