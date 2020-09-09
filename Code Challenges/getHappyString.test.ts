function getHappyString(n: number, k: number): string {
  const letters = "abc";
  function* generate(s = ""): Generator<string, any, undefined> {
    if (s.length === n) {
      yield s;
      return;
    }
    for (let i = 0; i < 3; i++) {
      if (letters[i] !== s[s.length - 1]) yield* generate(s + letters[i]);
    }
  }

  let i = 1;
  for (let str of generate()) {
    if (i === k) return str;
    i++;
  }
  return "";
}

test("1, 3", () => {
  expect(getHappyString(1, 3)).toBe("c");
});
test("3, 1", () => {
  expect(getHappyString(3, 1)).toBe("aba");
});
test("10, 100", () => {
  expect(getHappyString(10, 100)).toBe("abacbabacb");
});
