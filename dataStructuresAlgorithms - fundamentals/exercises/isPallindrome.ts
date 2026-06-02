function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isChar(s[left])) left++;
        while (left < right && !isChar(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
}

function isChar(ch: string): boolean {
    return /[a-zA-Z0-9]/.test(ch);
}