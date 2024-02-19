// https://leetcode.com/problems/top-k-frequent-elements/description/

function topKFrequent (nums, k) {
    let memo = new Map();

    for(let i = 0; i < nums.length; i++) {
        if (!memo.has(nums[i])) {
            memo.set(nums[i], 1)
        } else {
            memo.set(nums[i], memo.get(nums[i]) + 1)
        }
    }
    const sort = new Map([...memo.entries()].sort((a, b) => b[1] - a[1]));

    const keys = [...sort.keys()];
    return keys.slice(0, k)
}

console.log(topKFrequent([1,1,1,2,2,3], 2))
// console.log(topKFrequent([3,0,1,0], 1))
