function diStringMatch(s: string){
    const result = [];
    const arr = [];

    for (let i = 0; i <= s.length; i++) {
        arr.push(i);
        if (i === s.length || s[i] === "I") {
            while (arr.length) {
                result.push(arr.pop());
            }
        }
    }

    return result;
};