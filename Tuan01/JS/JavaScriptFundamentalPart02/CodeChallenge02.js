const calcTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
}

let bills = [125, 55, 44]

let tips = bills.map((value) => calcTip(value))

let total = bills.map((value, index) => tips[index] + value)
console.log(bills)
console.log(tips)
console.log(total)

