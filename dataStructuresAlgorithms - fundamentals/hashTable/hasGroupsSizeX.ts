function hasGroupsSizeX(deck: number[]): boolean {
    const deckMap = new Map<number, number>();

    for (let i = 0; i < deck.length; i++) {
        deckMap.set(deck[i], (deckMap.get(deck[i]) || 0) + 1);
    }

    const getGcd = (a: number, b: number): number => 
        b === 0 ? a : getGcd(b, a % b);

    const counts: number[] = Array.from(deckMap.values());

    const gcd = counts.reduce((a, b) => getGcd(a, b));

    return gcd > 1;
}
