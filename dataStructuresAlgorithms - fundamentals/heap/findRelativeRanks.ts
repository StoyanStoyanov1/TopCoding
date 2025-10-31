function findRelativeRanks(score: number[]) {
    const ranks: Record<number, string> = {1: "Gold Medal", 2: "Silver Medal", 3: "Bronze Medal"};

    const sortedScores: number[] = [...score].sort((a, b) => b - a);
    const result: number | string [] = [];

    for (const sc of score) {
        const rank = sortedScores.indexOf(sc) + 1;
        result.push(ranks[rank] ? ranks[rank] : rank.toString());
    }

    return result;
};