// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/description/

function numSubseq(nums, target) {
    const module = Math.pow(10, 9) + 7;
    let res = 0;
    nums.sort((a,b) => a - b);

    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        if (nums[l] + nums[r] <= target) {
            res += Math.pow(2, r-l) % module;
            l++;
        } else {
            r--;
        }
    }
    return res;
}


console.log(numSubseq([3,5,6,7], 9))
console.log(numSubseq([2,3,3,4,6,7], 12))