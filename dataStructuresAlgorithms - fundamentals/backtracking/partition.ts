export function partition(s: string): string[][] {
    const result: string[][] = [];

    const backtrack = (start: number, path: string[]): void => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            const substr = s.substring(start, end + 1);

            if (isPalindrome(substr)) {
                path.push(substr);
                backtrack(end + 1, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
}

function isPalindrome(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}
