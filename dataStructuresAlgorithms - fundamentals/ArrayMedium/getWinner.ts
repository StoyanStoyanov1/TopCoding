function getWinner(arr: number[], k: number): number {
    const maxElement: number = Math.max(...arr);
    let curr: number = arr[0];
    let winStreak: number = 0;

    for (let i = 1; i < arr.length; i++) {
        const opponent: number = arr[i];

        if (curr > opponent) {
            winStreak++;
        } else {
            curr = opponent;
            winStreak = 1;
        }

        if (winStreak === k || curr === maxElement) {
            break;
        }
    }

    return curr;
}
