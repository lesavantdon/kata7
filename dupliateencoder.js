function duplicateEncode(word) {
    const lowerCaseWord = word.toLowerCase();
    const charCount = {};
    const result = [];

    // Count occurrences of each character
    for (const char of lowerCaseWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Build the result string based on occurrences
    for (const char of lowerCaseWord) {
        if (charCount[char] > 1) {
            result.push(')');
        } else {
            result.push('(');
        }
    }

    return result.join('');
}
