// var lengthOfLongestSubstring = function(s) {
//     let finalLength = 0;

//     for(let i = 0; i < s.length; i++) {
//         if (finalLength > (s.length - 1 - i)) {
//             break;
//         }

//         let count = 0;
//         let substring = ''
//         for(let j = i; j < s.length; j++) {
//             if (substring.indexOf(s[j]) === -1) {
//                 substring += s[j];
//                 count++;
//             } else {
//                 if (count > finalLength) {
//                     finalLength = count
//                     break;
//                 }
//             }
//         }
//     }
//     return finalLength;
// };

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
    let finalCount = 0;
    let substring = [];

    for (let i = 0; i < s.length; i++) {
        const index = substring.indexOf(s[i]);

        if (index !== -1) {
            substring.splice(0, index+1);
        }

        substring.push(s[i]);
        finalCount = Math.max(substring.length, finalCount);
    }
    return finalCount
}

console.log(lengthOfLongestSubstring('pwwkew'))