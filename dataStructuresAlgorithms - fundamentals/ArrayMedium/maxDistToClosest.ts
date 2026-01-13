function maxDistToClosest(seats: number[]): number {
    let maxFreeSeats: number = 0;
    let curFreeSeats: number = 0;

    for (const seat of seats) {
        if (seat === 0) {
            curFreeSeats++;
        } else {
            maxFreeSeats = Math.max(maxFreeSeats, curFreeSeats);
            curFreeSeats = 0;
        }
    }

    return Math.max(Math.ceil(maxFreeSeats / 2), curFreeSeats);
}
