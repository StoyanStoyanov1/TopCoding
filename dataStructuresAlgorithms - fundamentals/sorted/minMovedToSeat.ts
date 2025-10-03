function minMovedToSeat(seats: number[], students: number[]): number {
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    const result:number = seats.reduce((a, b, i) => a + Math.abs(b - students[i]), 0);

    return result;
};