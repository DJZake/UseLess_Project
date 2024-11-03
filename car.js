const car = document.getElementById('car');
const obstacles = document.querySelectorAll('.obstacle');
const road = document.getElementById('road');

let carPosition = 50; 
let obstacleSpeed = 2; 
let score = 0;

function moveCar(event) {
    if (event.key === 'ArrowLeft' && carPosition > 10) {
        carPosition -= 10;
    }
    if (event.key === 'ArrowRight' && carPosition < 260) {
        carPosition += 10;
    }
    car.style.left = `${carPosition}px`;
}

function moveObstacles() {
    obstacles.forEach(obstacle => {
        let obstacleTop = parseInt(window.getComputedStyle(obstacle).getPropertyValue('top'));
        if (obstacleTop > 600) {
            obstacleTop = -80; 
            score++;
            obstacle.style.left = `${Math.random() * (road.clientWidth - 40)}px`; 
        }
        obstacle.style.top = `${obstacleTop + obstacleSpeed}px`;
        obstacle.style.left = `${obstacle.style.left}`;
    });

    if (checkCollision()) {
        alert(`Game Over! Your score: ${score}`);
        resetGame();
    }

    requestAnimationFrame(moveObstacles);
}

function checkCollision() {
    const carRect = car.getBoundingClientRect();
    let collision = false;

    obstacles.forEach(obstacle => {
        const obstacleRect = obstacle.getBoundingClientRect();
        if (
            carRect.x < obstacleRect.x + obstacleRect.width &&
            carRect.x + carRect.width > obstacleRect.x &&
            carRect.y < obstacleRect.y + obstacleRect.height &&
            carRect.y + carRect.height > obstacleRect.y
        ) {
            collision = true;
        }
    });
    return collision;
}

function resetGame() {
    score = 0;
    obstacles.forEach(obstacle => {
        obstacle.style.top = `${Math.random() * -600}px`; 
    });
}

document.addEventListener('keydown', moveCar);
requestAnimationFrame(moveObstacles);
