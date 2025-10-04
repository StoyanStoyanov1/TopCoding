function isSubsequence(s: string, t: string) {
   let counterOfS: number = 0;
   let counterOfT: number = 0;

   while (counterOfS < s.length && counterOfT < t.length) {
        if (s[counterOfS] === t[counterOfT]) {
            counterOfS++;
        }

        counterOfT++;
   }

   return counterOfS === s.length;
};