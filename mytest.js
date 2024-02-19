// https://leetcode.com/discuss/interview-question/378237/twitter-oa-2019-authentication-tokens

function numberOfTokens(expiryLimit, commands) {
    // populate tokens
    let mapTokens = new Map();
    let T = 0;
    for (let i = 0; i < commands.length; i++) {
        const token = commands[i];

        if (T < token[2]) T = token[2];

        if (token[0] === 0) {
            // insert token
            mapTokens.set(token[1], token[2] + expiryLimit);
        } else {
            // reset token
            let expireAt = mapTokens.get(token[1]);

            if (expireAt >= token[2]) {
                // if still valid, reset
                mapTokens.set(token[1], token[2] + expiryLimit)
            }
        }
    }

    // filter valid tokens (expiration < T)
    let validTokens = Array.from(mapTokens.entries()).filter((el) => el[1] <= T);

    return validTokens.length;
}

console.log(numberOfTokens(4, [[0,1,1], [0,2,2], [1,1,5], [1,2,7]]))