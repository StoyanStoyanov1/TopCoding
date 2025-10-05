function divisorSub(num: number, k: number) {
    const numAsStr: string = num.toString();
    let counterOfDevisions = 0;

    for (let i = k; i <= numAsStr.length; i++) {
        const currentNum = parseInt(numAsStr.slice(i - k, i));
        if (currentNum !== 0 && num % currentNum === 0) counterOfDevisions++;
    }

    return counterOfDevisions;
};