function convertToTitle(columnNumber: number): string {
    const charCodeOfA: number = 65;
    const lengthOfAlph: number = 26;

    let result:string = "";

    while (columnNumber > 0) {
        columnNumber--;
        const remainder: number = columnNumber % lengthOfAlph;
        result = String.fromCharCode(charCodeOfA + remainder) + result;
        columnNumber = Math.floor(columnNumber / lengthOfAlph);
    }

    return result;
};