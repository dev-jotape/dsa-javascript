// https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/description/

function isPossible(nums, mid, threshold) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / mid);
        if (sum > threshold) return false;
    }
    return true;
}

var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);

    while(left < right) {
        let mid = Math.trunc(left + (right - left) / 2);
        if (isPossible(nums, mid, threshold)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};

// smallestDivisor([1,2,3,4,5], 8);
smallestDivisor([8,4,2,3], 10);