// https://leetcode.com/problems/koko-eating-bananas/description/

function possible(speed, piles, h) {
    let hours = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] <= speed) {
            hours++;
        } else {
            hours += Math.ceil(piles[i] / speed);
        }
        if (hours > h) return false
    }
    return true
}

function minEatingSpeed(piles, h) {
    let left = 1;
    let right = piles.reduce((acc, el) => acc += el, 0);

    while (left < right) {
        let mid = left + Math.trunc((right - left) / 2);

        if (possible(mid, piles, h)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left
}

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))