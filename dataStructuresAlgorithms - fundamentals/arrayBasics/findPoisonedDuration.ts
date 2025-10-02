function findPoisonedDuration (timeSeries: number[], duration: number): number {
    let totalTimeInSeconds: number = 0;

    for (let i = 0; i <= timeSeries.length - 1; i++) {
        if (i === timeSeries.length - 1) {
            totalTimeInSeconds += duration;
        }

        else if (timeSeries[i] + duration > timeSeries[i + 1]) {
            totalTimeInSeconds += timeSeries[i + 1] - timeSeries[i];
        } else {
            totalTimeInSeconds += duration;
        }
        

    } 
    
    return totalTimeInSeconds;
};