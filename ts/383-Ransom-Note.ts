function canConstruct(ransomNote: string, magazine: string): boolean {
    for (let char of ransomNote) {
        if (!magazine.includes(char)) {
            return false;
        }
        magazine = magazine.replace(char, '');
    }
    return true;
};