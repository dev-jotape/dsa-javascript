
// The test was like a scoreboard classification, the input is basically the number of players that can pass, and the second is an array of scores. Basically, k =3, scores = [100,90, 80, 30,10, 5] it should return 3 saying that the number of players that passed were 3.
// For k = 3, and scores = [100, 90, 0], so it should return 2 cause O can't pass
// and for k = 3, scores = [100,90,90,90, 5, 1], it should reutrn 4, even though k = 3, as we have ties we can have more peolple classified
// my solution in javascript was the following, this is the corrected version( could solve 2 min after the interview ended), I added the first
function numPlayers(k, scores) {
    let scoreMap = new Map();

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === 0) continue;

        if (!scoreMap.get(scores[i])) {
            scoreMap.set(scores[i], 1);
        } else {
            scoreMap.set(scores[i], scoreMap.get(scores[i]) + 1);
        }
    }

    const sorted = Array.from(new Set(scores)).sort((a,b) => b - a)

    let rankNumber = 0;
    for (let i = 0; i < sorted.length; i++) {
        const currRankup = scoreMap.get(sorted[i]);
        rankNumber += currRankup;
        if (rankNumber >= k) {
            return rankNumber;
        }
    }
    return rankNumber;
}

// console.log(numPlayers(3, [100,90, 80, 30,10, 5]))
console.log(numPlayers(3, [100,90,90,90, 5, 1]))
