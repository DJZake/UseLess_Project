const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let bubbles = [];
let shooterX = canvas.width / 2;
let shooterY = canvas.height - 30;
let bubbleRadius = 15;

function drawShooter() {
    ctx.fillStyle = '#ff66b2';
    ctx.fillRect(shooterX - 20, shooterY, 40, 10);
}

function drawBubble(bubble) {
    ctx.beginPath();
    ctx.arc(bubble.x, bubble.y, bubbleRadius, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
    ctx.closePath();
}

function updateBubbles() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].y -= 2;
        if (bubbles[i].y < 0) {
            bubbles.splice(i, 1);
            i--;
        }
    }
}

function shootBubble() {
    const bubbleColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    bubbles.push({ x: shooterX, y: shooterY, color: bubbleColor });
}

function detectCollisions() {
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
            const dx = bubbles[i].x - bubbles[j].x;
            const dy = bubbles[i].y - bubbles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < bubbleRadius * 2) {
                if (bubbles[i].color === bubbles[j].color) {
                    bubbles.splice(j, 1);
                    bubbles.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShooter();
    bubbles.forEach(drawBubble);
    updateBubbles();
    detectCollisions();
    requestAnimationFrame(draw);
}

document.getElementById('leftButton').addEventListener('click', () => {
    if (shooterX > 20) shooterX -= 20;
});

document.getElementById('rightButton').addEventListener('click', () => {
    if (shooterX < canvas.width - 20) shooterX += 20;
});

document.getElementById('shootButton').addEventListener('click', shootBubble);

draw();
