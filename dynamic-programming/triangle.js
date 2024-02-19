// https://leetcode.com/problems/triangle/description/?envType=list&envId=55ac4kuc

function minTotal(triangle) {
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j === 0) {
                triangle[i][j] += triangle[i-1][0];
            } else if (j === triangle[i].length - 1) {
                triangle[i][j] += triangle[i-1][j-1];
            } else {
                triangle[i][j] += Math.min(triangle[i-1][j], triangle[i-1][j-1]);
            }
        }
    }
    return Math.min(...triangle[triangle.length-1])
}

console.log(minTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minTotal([[-10]]))