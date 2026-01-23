function validIPAddress(queryIP: string): string {
    let separator: string = '';

    for (let i = 0; i < queryIP.length; i++) {
        if (queryIP[i] === '.') {
            separator = '.';
            break;
        } else if (queryIP[i] === ':') {
            separator = ':';
            break;
        }
    }

    if (separator === '.') {
        const arr: string[] = queryIP.split(separator);
        if (arr.length !== 4) return 'Neither';

        for (const segment of arr) {
            if (segment.length < 1 || segment.length > 3) return 'Neither';
            if (segment.length > 1 && segment[0] === '0') return 'Neither';
            if (Number.isNaN(Number(segment))) return 'Neither';
            if (Number(segment) > 255) return 'Neither';
        }

        return 'IPv4';
    }
    else if (separator === ':') {
        const arr: string[] = queryIP.split(separator);
        if (arr.length !== 8) return 'Neither';

        for (const segment of arr) {
            if (segment.length < 1 || segment.length > 4) return 'Neither';

            for (const char of segment) {
                const code = char.toUpperCase().charCodeAt(0);
                if (
                    Number.isNaN(Number(char)) &&
                    (code < 65 || code > 70)
                ) {
                    return 'Neither';
                }
            }
        }

        return 'IPv6';
    }

    return 'Neither';
}
