const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}

const checkWinner = (avgA, avgB) => {
    if(avgA >= 2 * avgB) {
        console.log(`Dolphins win (${avgA.toFixed(1)} vs. ${avgB.toFixed(1)})`)
    } else if(avgB >= 2 * avgA) {
        console.log(`Koalas win (${avgB.toFixed(1)} vs. ${avgA.toFixed(1)})`)
    } else {
        console.log('No team wins!')
    }
}

// Test 01
let dolphins = calcAverage(44, 23, 71)
let koalas = calcAverage(65, 54, 49)
checkWinner(dolphins, koalas)

// Test 02
dolphins = calcAverage(85, 54, 41)
koalas = calcAverage(23, 34, 27)
checkWinner(dolphins, koalas)




