function largestNumber(nums: number[]): string {
    const numsAsStr: string[] = nums.map(String);

    numsAsStr.sort((a, b) => (b + a).localeCompare(a + b));

    if (numsAsStr[0] === "0") return "0";

    return numsAsStr.join("");
}
