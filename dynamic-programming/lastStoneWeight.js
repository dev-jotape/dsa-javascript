// https://leetcode.com/problems/last-stone-weight-ii/description/

function lastStoneWeight(stones) {
    const stoneSum = stones.reduce((acc, el) => acc += el, 0);
    const target = Math.ceil(stoneSum/2);

    function dfs(i, total) {
        if (total >= target || i === stones.length) {
            return Math.abs(total - (stoneSum - total))
        }
        if (dp[i] !== undefined && dp[i][total] !== undefined) {
            return dp[i][total];
        }

        dp[i] = dp[i] || {};

        dp[i][total] = Math.min(dfs(i + 1, total), dfs(i + 1, total + stones[i]));

        console.log(dp)
        return dp[i][total];
    }
    
    let dp = {};
    return dfs(0, 0);
}

// console.log(lastStoneWeight([2,7,4,1,8,1]))
console.log(lastStoneWeight([31,26,33,21,40]))
