document.getElementById('shortenButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');

    if (urlInput) {
        const shortUrl = `https://short.ly/${btoa(urlInput).substring(0, 8)}`;
        resultDiv.textContent = `Shortened URL: ${shortUrl}`;
    } else {
        resultDiv.textContent = 'Please enter a valid URL.';
    }
});
