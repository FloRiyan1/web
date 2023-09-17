// Finde das Formular und die Meldung
const anmeldeFormular = document.getElementById('anmeldeFormular');
const meldung = document.getElementById('meldung');
const logintext = document.getElementById('login-text');
const passwordfield = document.getElementById('password');
const passwordHide = document.getElementById('password-hide');

// Event-Listener für das Formular hinzufügen
anmeldeFormular.addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindere das Standardverhalten des Formulars (Seitenneuladen)

    // Hier füge deine Anmeldeüberprüfung hinzu
    const benutzername = document.getElementById('username').value;
    const passwort = document.getElementById('password').value;

    // Beispiel: Wenn Anmeldeinformationen korrekt sind
    if (benutzername === 'Florian' && passwort === 'Hogrefe') {
        // Weiterleitung zur neuen Seite
        window.location.href = '../main/menu.html';
    } else {
        // Anzeige einer Fehlermeldung
        meldung.style.display = 'flex';
        meldung.style.marginBottom = '6px';
        logintext.style.marginBottom = 0;
    }
});

passwordHide.onclick = function() {
    if (passwordfield.type == "password") {
        passwordHide.src = '../../Bilder/lock-open-solid-24.png'
        passwordfield.type = 'text';
    } else {
        passwordHide.src = '../../Bilder/lock-solid-24.png'
        passwordfield.type = 'password';
    }

};