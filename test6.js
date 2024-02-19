// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
function climbingLeaderboard(ranked, player) {
    // remove duplicates
    let uniqueValues = Array.from(new Set(ranked));
    console.log(uniqueValues)

    for (let i = 0; i < player.length; i++) {
        // first position?
        if (uniqueValues[0] < player[i]) {
            console.log(1)
            continue;
        }
        // last position?
        if (uniqueValues[uniqueValues.length-1] > player[i]) {
            console.log(uniqueValues.length+1)
            continue;
        }
        // binary search
        let left = 0;
        let right = uniqueValues.length-1;

        while (left < right) {
            let mid = left + Math.trunc((right - left) / 2);
            if (uniqueValues[mid] > player[i]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        console.log(left+1)
    }
    
};

// climbingLeaderboard([100,100,50,40,40,20,10], [5,25,50,120])
climbingLeaderboard([100,90,90,80,75,60], [50,65,77,90,102])