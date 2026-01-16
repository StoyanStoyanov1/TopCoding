function lengthOfLongestSubstring(s: string): number {
    let longest = 0;

    for (let i = 0; i < s.length; i++) {
        const charSet = new Set<string>();
        let index = i;

        while (index < s.length && !charSet.has(s[index])) {
            charSet.add(s[index]);
            index++;
        }

        longest = Math.max(longest, charSet.size);

        if (s.length - i <= longest) break;
    }

    return longest;
}
