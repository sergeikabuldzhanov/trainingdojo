/* class Solution(object):
    def decodeString(self, s):
        stack = []
        for i in range(len(s)):
            if s[i] == "]":
                current = ''
                while stack:
                    val = stack.pop()
                    if val ==  "[":
                        break
                    current = val + current
                num = ''
                while stack and stack[-1].isdigit():
                    num = stack.pop() + num
                stack.append(int(num)*current)
            else:
                stack.append(s[i])
        return ''.join(stack) */

function decodeString(s: string): string {
  const stack: string[] = [];
  for (let char of s) {
    if (char === "]") {
      let current = "";
      while (stack.length) {
        const val = stack.pop();
        if (val === "[") break;
        current = val + current;
      }
      let num = "";
      while (stack.length && !isNaN(+stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      stack.push(current.repeat(Number(num)));
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

describe("DecodeString", () => {
  test("Case 1:", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });
  test("Case 2:", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });
  test("Case 3:", () => {
    expect(decodeString("2[abc]3[cd]ef")).toBe("abcabccdcdcdef");
  });
  test("Case 4:", () => {
    expect(decodeString("abc3[cd]xyz")).toBe("abccdcdcdxyz");
  });
});
