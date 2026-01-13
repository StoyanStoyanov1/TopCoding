function shiftingLetters(s: string, shifts: number[]): string {
    let totalShifts: number = 0;

    const formatted: string[] = new Array(s.length);

    for (let i = s.length - 1; i >= 0; i--) {
        totalShifts = (totalShifts + shifts[i]) % 26;

        const newCharCode: number =
            (s.charCodeAt(i) - 97 + totalShifts) % 26 + 97;

        formatted[i] = String.fromCharCode(newCharCode);
    }

    return formatted.join("");
}
