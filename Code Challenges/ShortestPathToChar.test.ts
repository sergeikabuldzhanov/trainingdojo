/* 
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
Example 1:
Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
Note:
    S string length is in [1, 10000].
    C is a single character, and guaranteed to be in string S.
    All letters in S and C are lowercase.

    def shortestToChar(self, S: str, C: str) -> List[int]:
        indexes = [i for i,c in enumerate(S) if c == C]
        prev = None
        distances = [0 for char in S]
        for i in indexes:
            if prev is not None:
                for j in range(prev, i+1):
                    distances[j] = min(abs(j - prev), abs(j - i))
            else:
                for j in range(i+1):
                    distances[j] = i - j
            prev = i
        if indexes[-1] != len(S)-1:
            for i in range(indexes[-1], len(S)):
                distances[i] = i - indexes[-1]
        return distances
*/

function shortestToChar(S: string, C: string): number[] {
  const distances = new Array(S.length).fill(0);
  const charIndexes = S.split("").reduce(
    (acc: number[], char, index) => (char === C ? acc.concat([index]) : acc),
    []
  );

  let prev: number | null = null;
  for (let i of charIndexes) {
    if (prev !== null) {
      for (let j = prev; j <= i; j++) {
        distances[j] = Math.min(Math.abs(j - prev), Math.abs(j - i));
      }
    } else {
      for (let j = 0; j <= i; j++) {
        distances[j] = i - j;
      }
    }
    prev = i;
  }
  if (charIndexes[charIndexes.length - 1] !== S.length - 1) {
    for (let i = charIndexes[charIndexes.length - 1]; i < S.length; i++) {
      distances[i] = i - charIndexes[charIndexes.length - 1];
    }
  }
  return distances;
}

describe("", ()=>{
    test("", ()=>{
        expect(shortestToChar("loveleetcode", "e"))
            .toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0])
    })
})

