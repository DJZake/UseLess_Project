document.getElementById('calculateButton').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();
    const resultDiv = document.getElementById('result');

    let lovePercentage;
    
    // Check for specific names
    if ((name1 === "anandhu" && name2 === "akshara") || (name1 === "akshara" && name2 === "anandhu")) {
        lovePercentage = 100;
    } else {
        lovePercentage = Math.floor(Math.random() * 101);
    }

    const cuteCatWords = getCuteCatWords(lovePercentage);
    resultDiv.textContent = `${name1} ♥ ${name2} : ${lovePercentage}% ${cuteCatWords}`;
});

function getCuteCatWords(percentage) {
    if (percentage >= 90) {
        return '🐾 You two are purr-fect together!';
    } else if (percentage >= 70) {
        return '🐱 A meow-velous match!';
    } else if (percentage >= 50) {
        return '😺 Pretty good fur-real!';
    } else if (percentage >= 30) {
        return '😻 A cute combo, but needs work!';
    } else {
        return '🐈 Keep trying, lovebirds!';
    }
}
