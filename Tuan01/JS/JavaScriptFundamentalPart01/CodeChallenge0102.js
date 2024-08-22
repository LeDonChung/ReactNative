// Code Challenge 01

let massMark = 78
let heightMark = 1.69
let massJohn = 92
let heightJohn = 1.95

let bmiMark = massMark / heightMark**2
let bmiJohn =  massJohn / heightJohn**2

let markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark)
console.log(bmiJohn)
console.log(markHigherBMI)

// Code Challenge 02

if(markHigherBMI) 
    console.log('Mark BMI is higher than John!')
else 
    console.log('John BMI is higher than Mark!')


if(markHigherBMI) 
    console.log(`Mark BMI(${bmiMark.toFixed(1)}) is higher than John(${bmiJohn.toFixed(1)})!`)
else 
    console.log(`John BMI(${bmiJohn.toFixed(1)}) is higher than Mark(${bmiMark.toFixed(1)})!`)



