// value 50 - 300 -> tip = 15%
// value different -> tip = 20%

const calculateTip = (bill) => {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2
}

let bills = [275, 40, 430]
bills.forEach((value) => {
    let tip = calculateTip(value);
    console.log(`The bill was ${value}, the tip was ${tip.toFixed(2)}, and the total value ${(value + tip).toFixed(2)}`)
})