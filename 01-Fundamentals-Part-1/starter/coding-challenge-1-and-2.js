 //BMI = mass / height ** 2; second variant - BMI = mass / (height * height) 
//TEST DATA 1.
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const resultMark = weightMark / heightMark ** 2;
const resultJohn = weightJohn / heightJohn ** 2;
const markHigherBMI = resultMark > resultJohn;

console.log(resultMark, resultJohn);
console.log(markHigherBMI);

// CODING CHALLENGE #2 !!!
if(resultMark > resultJohn) {
    console.log(`Mark's BMI (${resultMark}) is higher than John's (${resultJohn})!`);
} else {
    console.log(`John's BMI (${resultJohn}) is higher then Mark's (${resultMark})!`);
}
