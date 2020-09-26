function lengthOfLastWord(s: string): number {
  if (!s) return 0;
  const splitStr = s.split(/\s+/);

  return splitStr[splitStr.length - 1]
    ? splitStr[splitStr.length - 1].length
    : splitStr[splitStr.length - 2].length;
}

test("Hello World", () => {
  expect(lengthOfLastWord("Hello World")).toBe(5);
});
