/* 
class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        if not wordDict:
            return False
        wordDict = set(wordDict)
        longest_word = max(len(word) for word in wordDict)
        dp = [False for char in range(len(s)+1)]
        dp[0] = True
        for i in range(1, len(s)+1):
            current_word = ""
            for j in range(i-1, max(0, i-longest_word)-1, -1):
                current_word = s[j] + current_word
                if current_word in wordDict and dp[j]:
                    dp[i] = True
                if dp[i]:
                    break
        print(dp)
        return dp[-1]

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine 
if s can be segmented into a space-separated sequence of one or more dictionary words.
Note:

    The same word in the dictionary may be reused multiple times in the segmentation.
    You may assume the dictionary does not contain duplicate words.

Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.

Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false


*/

function wordBreak(s: string, wordDict: string[]): boolean {
  if (!wordDict.length) return false;

  const maxWordLength = Math.max(...wordDict.map((word) => word.length));
  const words = new Set(wordDict);
  // the basic idea is to find whether or no there's a string of words such that
  // it ends at the end of s
  // to figure that out, we'll go through each of the indexes in s, and see whether there's
  // a dictionary word ending at that index
  // if there is, and there's another word ending at the beginning of that word - 1, we mark it as true
  // we will use an array to keep track of all that data.
  // we initialize it with size of s.length + 1 so that we can apply the same logic for the first word we meet.
  const chainable_indexes = new Array(s.length + 1).fill(false);
  chainable_indexes[0] = true;
  // for each index in s, start there and look back to see if there's a word ending at that index
  for (let i = 0; i < s.length; i++) {
    let current_word = "";
    for (let j = i; j >= Math.max(0, i - maxWordLength); j--) {
      current_word = s[j] + current_word;
      if (words.has(current_word) && chainable_indexes[j] === true) {
        chainable_indexes[i + 1] = true;
      }
      if (chainable_indexes[i + 1]) break;
    }
  }
  return chainable_indexes[chainable_indexes.length - 1];
}

describe("WordBreak", () => {
  test("Return true when should", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });
  test("2nd true test case", () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });
  test("Similar words", () => {
    expect(wordBreak("aaaaaaa", ["aaaa", "aaa"])).toBe(true);
  });
  test("Return false when should", () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(false);
  });
});
