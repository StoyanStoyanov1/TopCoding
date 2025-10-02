function validPalindrome (s: string): boolean {
    let leftIndex = 0;
    let rightIndex = s.length - 1;

    while (leftIndex < rightIndex) {
        if (s[leftIndex] === s[rightIndex]) {
            leftIndex++;
            rightIndex--;
        } else {
            return isPalindromeRange(s, leftIndex + 1, rightIndex) ||
                   isPalindromeRange(s, leftIndex, rightIndex - 1);
        }
    }

    return true;
};

function isPalindromeRange(s: string, i: number, j: number) {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}
