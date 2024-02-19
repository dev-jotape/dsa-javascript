// https://leetcode.com/discuss/interview-question/528041/mathworks-edg-new-grad-oa-2020-ideal-numbers-in-a-range

function getIdealNumber(low, high) {
    let result = 0;
    for (let x = 0; x < high; x++) {
      for (let y = 0; y < high; y++) {
        if ((3**x * 5**y) >= low && (3**x * 5**y) <= high) {
          result++
        }
      }
    }
    return result
  }

// getIdealNumber(200,405)
getIdealNumber(1,3)