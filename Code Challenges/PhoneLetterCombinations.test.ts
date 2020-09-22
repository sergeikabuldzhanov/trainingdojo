function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const mapping: { [key: string]: string } = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  function* generate(digits: string, cur: string): Generator<string, void> {
    if (!digits.length) {
      yield cur;
      return;
    }

    for (let char of mapping[digits[0]]) {
      yield* generate(digits.slice(1), cur + char);
    }
  }
  const ans = [];
  for (let s of generate(digits, "")) ans.push(s);
  return ans;
}

test("Base case", () => {
  expect(letterCombinations("233")).toEqual([
    "add",
    "ade",
    "adf",
    "aed",
    "aee",
    "aef",
    "afd",
    "afe",
    "aff",
    "bdd",
    "bde",
    "bdf",
    "bed",
    "bee",
    "bef",
    "bfd",
    "bfe",
    "bff",
    "cdd",
    "cde",
    "cdf",
    "ced",
    "cee",
    "cef",
    "cfd",
    "cfe",
    "cff",
  ]);
});

test("Empty input", () => {
  expect(letterCombinations("")).toEqual([]);
});
