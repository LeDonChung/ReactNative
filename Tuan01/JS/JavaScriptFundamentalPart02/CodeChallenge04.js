const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

bills.forEach(value => {
    let tip = calcTip(value)
    tips.push(tip)
    totals.push(value + tip)
})

const calcAverage = (arr) => {
    let sum = 0
    arr.forEach(value => {
        sum += value
    })

    return sum / arr.length
}
console.log(bills)
console.log(tips)
console.log(totals)
console.log(calcAverage(totals))

