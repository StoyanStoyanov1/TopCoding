function pickGifts(gifts: number[], k: number): number {
  let total: number = gifts.reduce((a, b) => a + b, 0);

  gifts.sort((a, b) => a - b);

  while (k > 0 && gifts.length > 0) {
    const curNum: number | undefined = gifts.pop();
    if (curNum === undefined) break;

    total -= curNum;

    const newVal: number = Math.floor(Math.sqrt(curNum));
    total += newVal;

    if (newVal > 0) {
      gifts.unshift(newVal);
      gifts.sort((a, b) => a - b);
    }

    k--;
  }

  return total;
}
