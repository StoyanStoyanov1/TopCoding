function validUtf8(data: number[]): boolean {
    let i: number = 0;

    while (i < data.length) {
        const num: number = data[i];

        let bytes: number;
        if (num >> 7 === 0) bytes = 1;
        else if (num >> 5 === 6) bytes = 2;
        else if (num >> 4 === 14) bytes = 3;
        else if (num >> 3 === 30) bytes = 4;
        else return false;

        for (let j = i + 1; j < i + bytes; j++) {
            if (j >= data.length || data[j] >> 6 !== 2) {
                return false;
            }
        }

        i += bytes;
    }

    return true;
}
