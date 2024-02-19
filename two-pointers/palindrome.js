// https://leetcode.com/problems/valid-palindrome/description/

var isPalindrome = function(s) {
    s = s.replace(/ /g, '');
    s = s.toLowerCase();
    s = s.replace(/[^\w\s]/gi, '');

    for(let i = 0; i < Math.trunc(s.length / 2); i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))