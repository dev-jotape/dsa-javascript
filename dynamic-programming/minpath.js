// https://leetcode.com/problems/minimum-path-sum/description/?envType=list&envId=55ac4kuc

function minPath(grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(i > 0 && j > 0) {
                grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])
                console.log(grid)
            } else if (i > 0) {
                grid[i][j] += grid[i-1][j]
            } else if (j > 0) {
                grid[i][j] += grid[i][j-1]; 
            }
        }
    }

    return grid[m-1][n-1]
}

console.log(minPath([[1,3,1],[1,5,1],[4,2,1]]))