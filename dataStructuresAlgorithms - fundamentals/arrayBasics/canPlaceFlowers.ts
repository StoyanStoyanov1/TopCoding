function canPlaceFlowers (flowerbed: number[], n: number): boolean{
    let possibleFlowers: number = 0;

    if (flowerbed.length === 0) return false;

    if (flowerbed.length === 1) {
        if (!flowerbed[0]) possibleFlowers++
        
        return possibleFlowers >= n;
    }  

    if (flowerbed[0] !== 0 && flowerbed[1] !== 0) possibleFlowers++;

    for (let i = 1; i < flowerbed.length - 2; i++) {    
        const prevIndex: number = i - 1;
        const currentIndex: number = i;
        const nextIndex: number = i +1;


        if (flowerbed[prevIndex] !== 0 && flowerbed[currentIndex] !== 0 && flowerbed[nextIndex]) possibleFlowers++;
    }

    if (flowerbed[flowerbed.length - 1] !== 0 && flowerbed[flowerbed.length - 2] ! == 0) possibleFlowers++;

    return possibleFlowers >= n;

}