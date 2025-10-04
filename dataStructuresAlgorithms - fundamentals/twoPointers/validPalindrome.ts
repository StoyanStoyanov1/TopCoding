function validPalindrome (s: string):boolean {
    const arr: string[]= s.split("");
    let isRemoved:boolean = false;

    while (arr.length > 1) {
        const left = arr.shift();
        const right = arr.pop();

        if (left !== right) {

            if (isRemoved) return false;

            if (arr.length === 0) return true;

            if (left === arr[arr.length - 1]) arr.pop();

            else if (right === arr[0]) arr.shift();

            else return false;

            isRemoved = true;
            
        }
    }

    return true;
};