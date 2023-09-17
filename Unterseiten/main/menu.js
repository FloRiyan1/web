const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

function moveTo(x, y) {
    ctx.moveTo(x, y);
}

function lineTo(x, y) {
    ctx.lineTo(x, y);
}

function arc(x, y, radius, startAngle, endAngle) {
    ctx.arc(x, y, radius, startAngle, endAngle);
}

function drawHeart() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the heart shape
    ctx.fillStyle = "#f73487";
    ctx.beginPath();
    moveTo(150, 100);
    arc(100, 100, 25, 0, Math.PI, false);
    ctx.stroke();

    setTimeout(() => {
        arc(175, 100, 25, 0, Math.PI, false);
        ctx.stroke();

        setTimeout(() => {
            lineTo(100, 200);
            ctx.stroke();

            setTimeout(() => {
                lineTo(200, 200);
                ctx.stroke();

                setTimeout(() => {
                    lineTo(150, 100);
                    ctx.fill();
                }, 500); // Adjust the delay (in milliseconds) between each step
            }, 500);
        }, 500);
    }, 500);
}

// Start drawing the heart shape
drawHeart();