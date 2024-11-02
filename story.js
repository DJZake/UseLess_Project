const storyDiv = document.getElementById('story');
const addSentenceButton = document.getElementById('addSentence');
const resetButton = document.getElementById('reset');

const sentences = [
    "In a magical land filled with cotton candy clouds, there lived a cheerful little bunny named Binky. 🐰",
    "Binky loved to hop around the meadows, picking flowers and making friends with the butterflies. 🦋",
    "One sunny day, Binky discovered a hidden door behind a rainbow, and curiosity sparked in his heart. 🌈",
    "He opened the door to find a world where toys came to life and danced under the moonlight. 🧸",
    "Binky made friends with a talking teddy bear who loved to tell silly jokes. 😂",
    "Together, they embarked on fun adventures, like flying on the back of a friendly dragon. 🐉",
    "Every night, they would watch the stars twinkle and dream about their next adventure. ✨"
];

let story = "";
let typingIndex = 0;

function typeStory() {
    if (typingIndex < story.length) {
        storyDiv.textContent += story.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeStory, 75); // Slightly slower typing for a cute effect
    }
}

addSentenceButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    story += sentences[randomIndex] + "\n\n"; // Extra space for cuteness
    typingIndex = 0;
    typeStory();
});

resetButton.addEventListener('click', () => {
    story = "";
    storyDiv.textContent = "";
});
