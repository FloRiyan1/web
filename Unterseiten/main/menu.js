const suche = document.getElementById("suche");
const buttonEingabe = document.getElementById("suchenknopf");


suche.addEventListener('submit', function(e) {
    e.preventDefault(); // Verhindere das Standardverhalten des Formulars (Seitenneuladen)

    // Hier füge deine Anmeldeüberprüfung hinzu
    const suchtextfeld = document.getElementById("suchtexteingabe");

    // Beispiel: Wenn Anmeldeinformationen korrekt sind
    suchtextfeld.value;
});