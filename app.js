document.getElementById('generateBtn').addEventListener('click', generateWord);

function generateWord() {
    const words = [
        'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew',
        'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry',
        'strawberry', 'tangerine', 'ugli fruit', 'vanilla', 'watermelon', 'xigua',
        'yellow passion fruit', 'zucchini'
    ];
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById('wordDisplay').innerText = randomWord;
}