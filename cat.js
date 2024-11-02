const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', 
    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----', 
    ',': '--..--', '.': '.-.-.-', '?': '..--..', "'": '.----.', 
    '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', 
    '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', 
    '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', 
    '$': '...-..-', '@': '.--.-.'
};

function translateToMorse() {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let morseOutput = "";

    for (let char of inputText) {
        if (morseCode[char]) {
            morseOutput += morseCode[char] + " ";
        } else if (char === " ") {
            morseOutput += "/ ";
        }
    }

    document.getElementById("morseOutput").innerText = morseOutput.trim();
}

document.getElementById("translateBtn").addEventListener("click", translateToMorse);

const catContainer = document.getElementById("catContainer");

function createCat() {
    const cat = document.createElement("img");
    cat.src = "https://media.tenor.com/wbt5jI9nf3IAAAAj/cat-sticker-line-sticker.gif";
    cat.className = "cat";
    cat.style.left = `${Math.random() * (window.innerWidth - 50)}px`; // Account for cat width
    cat.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Account for cat height
    catContainer.appendChild(cat);

    moveCat(cat);
}

function moveCat(cat) {
    setInterval(() => {
        const windowWidth = window.innerWidth - 7000; // Account for cat width
        const windowHeight = window.innerHeight - 7000; // Account for cat height
        const x = Math.random() * windowWidth;
        const y = Math.random() * windowHeight;

        cat.style.left = `${x}px`;
        cat.style.top = `${y}px`;
    }, 2000);
}

// Create multiple cat images
for (let i = 0; i < 5; i++) { // Adjust the number to create more or fewer cats
    createCat();
}
