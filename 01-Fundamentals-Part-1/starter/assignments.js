//Assignment number 1 : Values nad Variables.
const country = "Bulgaria";
const continent = "Europe";
const capitalCity = "Sofia";
let population = 7;

console.log(country);
console.log(continent);
console.log(population);

//Assignment number 2 : Data types.

const isIsland = false;
let language;
language = "bulgarian";

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

// Assignment number 3 : Let and Const.

//Assignment number 4 : Basic Operators.

// console.log(population / 2 ** 1);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// const description = `${country} is in ${continent}, and its
// ${population} million people speak ${language}!`;

// console.log(description);

// //Assignment number 5 : if / else Statements!

// if (population >= 33) {
//   console.log(`'${country}'s population is above averege. `);
//
//Assignment number 6 :
// console.log("9" - "5"); //-> 4
// console.log("19" - "13" + "17"); //-> 617
// console.log("19" - "13" + 17); //-> 23
// console.log("123" < 57); //-> false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //-> 1143

// Assignment number 7 ; Equality Operators == vs. ===.

// Assignemnt number 8 : Logical Operators
// if (language === "english" && population < 50 && !isIsland) {
//   console.log("You should live in Bulgaria :)");
// } else {
//   console.log("Bulgaria does not meet your criteria :(");
// }

// Assignemnt number 9 : Switch Statement !

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too");
// }

// Assingment number 10 : The Conditional(Ternary) Operator!
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
// Did try lol xD
function describeCountry(country, population, capital) {
  return `${country} has a ${population} million people and its
  capital is ${capital}!`;
}
console.log(describeCountry("Bulgaria", 7, "Sofia"));
