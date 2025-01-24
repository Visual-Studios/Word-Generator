function generateWord(length, useUppercase, useNumbers, useSpecialChars) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let characterSet = lowercaseChars;
    
    if (useUppercase) {
        characterSet += uppercaseChars;
    }
    if (useNumbers) {
        characterSet += numberChars;
    }
    if (useSpecialChars) {
        characterSet += specialChars;
    }
    
    let generatedWord = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        generatedWord += characterSet[randomIndex];
    }
    
    return generatedWord;
}

export { generateWord };