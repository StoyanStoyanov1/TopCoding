const maxProfit = (prices: number[]): number => {
    const minPrice: number = Math.min(...prices);

    const indexOfMinPrice: number = prices.indexOf(minPrice);

    if (indexOfMinPrice === prices.length - 1) {
        return 0;
    }

    const maxPrice: number = Math.max(
        ...prices.slice(indexOfMinPrice + 1)
    );

    return maxPrice - minPrice;
};
