function licenseKeyFormatting(s: string, k: number) {
    const str: string = s.split("-").join("").toUpperCase();

    const start: number = str.length % k;

    let result: string = str.substring(0, start);

    for (let i = start; i < str.length; i += k) {
        if (result.length) result += "-";
        result += str.substring(i, i + k);
    }

    return result;
};
