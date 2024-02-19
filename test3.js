// http://drops.g2i.co/i/UjSxEX
function getPassedSubjects(answered, needed, q) {
    let diffs = []
    for (let i = 0; i < answered.length; i++) {
        diffs.push(needed[i] - answered[i])
    }

    diffs = diffs.sort((a,b) => a-b);
    let completedSubjects = 0;
    for (let i = 0; i < diffs.length; i++) {
        if (diffs[i] <= q) {
            completedSubjects++;
            q -= diffs[i]
        } else {
            break;
        }
    }
    console.log(completedSubjects)
}

getPassedSubjects([27, 24, 0], [55,52,100], 100)