// Finde das Formular und die Meldung
const anmeldeFormular = document.getElementById('anmeldeFormular');
const meldung = document.getElementById('meldung');

// Event-Listener für das Formular hinzufügen
anmeldeFormular.addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindere das Standardverhalten des Formulars (Seitenneuladen)

    // Hier füge deine Anmeldeüberprüfung hinzu
    const benutzername = document.getElementById('username').value;
    const passwort = document.getElementById('password').value;

    // Beispiel: Wenn Anmeldeinformationen korrekt sind
    if (benutzername === 'Florian' && passwort === 'Hogrefe') {
        // Weiterleitung zur neuen Seite
        window.location.href = 'Unterseiten/main/menu.html';
    } else {
        // Anzeige einer Fehlermeldung

    }
});