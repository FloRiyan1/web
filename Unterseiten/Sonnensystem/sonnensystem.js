function bewegeObjektUmSonne(objekt, abstand) {
    let grad = 0;
    const sonnenmittelpunktX = 200; // X-Koordinate des Sonnenmittelpunkts
    const sonnenmittelpunktY = 200; // Y-Koordinate des Sonnenmittelpunkts

    setInterval(function() {
        grad++;
        const radian = grad * (Math.PI / 180);
        const x = sonnenmittelpunktX + abstand * Math.cos(radian);
        const y = sonnenmittelpunktY + abstand * Math.sin(radian);

        objekt.style.left = x - objekt.clientWidth / 2 + "px";
        objekt.style.top = y - objekt.clientHeight / 2 + "px";
    }, 10); // Ändere die Zeitintervalle nach Bedarf
}