function suggestedProducts(products: string[], searchWord: string): string[][] {
    products.sort();

    const result: string[][] = [];
    let currStr: string = "";

    for (let i = 0; i < searchWord.length; i++) {
        currStr += searchWord[i];

        const matches: string[] = [];

        for (let j = 0; j < products.length; j++) {
            const currProduct = products[j];

            if (currProduct.startsWith(currStr)) {
                matches.push(currProduct);
                if (matches.length === 3) break;
            }
        }

        result.push(matches);
    }

    return result;
}