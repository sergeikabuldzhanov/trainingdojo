/* 
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x%10 == 0 and x != 0): return False
        
        reverse_num = 0
        while x > reverse_num:
            reverse_num = reverse_num * 10 + x % 10
            x = x // 10
        
        return x == reverse_num or x == reverse_num // 10
*/

function isPalindrome(x: number) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reverseNum = 0;
  while (x > reverseNum) {
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reverseNum || x === Math.floor(reverseNum / 10);
}
