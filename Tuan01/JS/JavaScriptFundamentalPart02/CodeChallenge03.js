let mark = {
    fullName: 'Mark\'s',
    height: 1.69,
    mass: 78
}

let john = {
    fullName: 'John\'s',
    height: 1.95,
    mass: 92
}

const calcBMI = (mass, height) => {
    return mass / height ** 2
}

let bmiMark = calcBMI(mark.mass, mark.height)
let bmiJohn = calcBMI(john.mass, john.height)

if(bmiJohn > bmiMark) {
    console.log(`John's BMI (${bmiJohn.toFixed(2)}) is higher than Mark's (${bmiMark.toFixed(2)})!`)
} else {
    console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJohn.toFixed(2)})!`)
}
