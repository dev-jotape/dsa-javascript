// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/

function possible(weights, limit, d) {
    let total = 0;
    let days = 1;
    for (let i = 0; i < weights.length; i++) {
        total += weights[i];
        if (total > limit) {
            days++;
            total = weights[i];
            if (days > d) {
                return false;
            }
        }
    }
    return true;
}

function shipWithinDays(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc, el) => acc += el, 0);
    let mid = 0;

    while (left < right) {
        mid = Math.trunc((right + left) / 2);
        if(possible(weights, mid, days)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left
}

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5))
console.log(shipWithinDays([3,2,2,4,1,4], 3))
console.log(shipWithinDays([1,2,3,1,1], 4))
