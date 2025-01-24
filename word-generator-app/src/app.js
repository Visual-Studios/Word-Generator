// This file initializes the word generator application, handles user input, and interacts with the word generator utility.

import { generateWord } from './utils/wordGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    const wordLengthInput = document.getElementById('word-length');
    const generateButton = document.getElementById('generate-button');
    const resultDisplay = document.getElementById('result');

    generateButton.addEventListener('click', () => {
        const length = parseInt(wordLengthInput.value);
        if (isNaN(length) || length <= 0) {
            resultDisplay.textContent = 'Please enter a valid word length.';
            return;
        }
        const generatedWord = generateWord(length);
        resultDisplay.textContent = `Generated Word: ${generatedWord}`;
    });
});