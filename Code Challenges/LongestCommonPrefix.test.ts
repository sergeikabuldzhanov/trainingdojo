function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  let prefix = "";
  let min = strs[0];
  for (let i = 0; i < strs.length; i++) {
    if (min.length > strs[i].length) min = strs[i];
  }

  let checks = 0;

  for (let j = 0; j < min.length; j++) {
    const char = min[j];
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i];
      if (char === str[j]) {
        checks++;
      } else {
        return prefix;
      }
    }
    if (checks === strs.length) {
      prefix += min[j];
      checks = 0;
    }
  }
  return prefix;
}

test("Base case", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["flower", "flow", "floater"])).toBe("flo");
  expect(longestCommonPrefix(["abc", "bcd", "cde"])).toBe("");
});

test("Handles empty input", () => {
  expect(longestCommonPrefix([])).toBe("");
});
