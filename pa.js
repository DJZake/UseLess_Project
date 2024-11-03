const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');

let painting = false;
let color = document.getElementById('colorPicker').value;
let isEraser = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isEraser ? '#ffffff' : color; // Use white for the eraser

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function changeColor(e) {
    if (!isEraser) {
        color = e.target.value;
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function toggleEraser() {
    isEraser = true;
    document.getElementById('selectPaintButton').classList.remove('active');
    document.getElementById('eraserButton').classList.add('active');
}

function selectPaint() {
    isEraser = false;
    document.getElementById('eraserButton').classList.remove('active');
    document.getElementById('selectPaintButton').classList.add('active');
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
document.getElementById('colorPicker').addEventListener('input', changeColor);
document.getElementById('clearButton').addEventListener('click', clearCanvas);
document.getElementById('eraserButton').addEventListener('click', toggleEraser);
document.getElementById('selectPaintButton').addEventListener('click', selectPaint);

draw();
