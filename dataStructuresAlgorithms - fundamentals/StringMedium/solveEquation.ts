function solveEquation(equation: string): string {
    const [leftPart, rightPart] = equation.split("=");

    const [leftNums, leftX] = calculate(leftPart);
    const [rightNums, rightX] = calculate(rightPart);

    const xCoeff: number = leftX - rightX;
    const constant: number = rightNums - leftNums;

    if (xCoeff === 0) {
        if (constant === 0) return "Infinite solutions";
        return "No solution";
    }

    return `x=${constant / xCoeff}`;
}

function calculate(part: string): [number, number] {
    let nums: number = 0;
    let xCounter: number = 0;
    let operation: "+" | "-" = "+";
    let numStr: string = "";

    for (let i = 0; i < part.length; i++) {
        const curPart: string = part[i];

        if (curPart === "x") {
            const coeff: number = numStr === "" ? 1 : Number(numStr);
            xCounter += operation === "+" ? coeff : -coeff;
            numStr = "";
            continue;
        }

        if (curPart === "-" || curPart === "+") {
            if (numStr !== "") {
                nums += operation === "+"
                    ? Number(numStr)
                    : -Number(numStr);
                numStr = "";
            }
            operation = curPart;
            continue;
        }

        numStr += curPart;
    }

    if (numStr !== "") {
        nums += operation === "+"
            ? Number(numStr)
            : -Number(numStr);
    }

    return [nums, xCounter];
}
