//   // Math Operators!!!
// const now = 2037;
// const ageKiro = now - 1991;
// const ageTanq = now - 2018;
// console.log(ageKiro,ageTanq);

// console.log(ageKiro * 2, ageKiro / 10, 2 ** 3);
//     //2 ** 3 means to the power of 3 = 2 * 2 *2

// const firstName = 'Kiro';
// const lastName = 'Minchev';
// console.log(firstName + ' ' +  lastName);

//    // Asiigment operators!!!
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

//    //Comparison operators!!!
// console.log(ageKiro > ageTanq); // >, <, <=, >=
// console.log(ageTanq >= 18);

// const isFullAge = ageTanq >= 18;

// console.log(now - 1991 > now - 2018);

//    //Strings and Template Literals!!!

// const firstName = 'Kiro';
// const job = 'musician';
// const birthYear = 1997;
// const year = 2022;

// const kiro = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(kiro);

// const kiroNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(kiroNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

//     //if / else statments !!!

// const age = 15;

// if(age >= 18) {
//    console.log(`Sarah can start driving license`)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// }
// console.log(century);

//TYPE CONVERSION AND COERCION !!!

//TYPE CONVERSION!
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('kiro'));
// console.log(typeof NaN);

// console.log(String(23), 23);

//   // TYPE COERCION!
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');

// TRUTHLY AND FALSY VALUES!!!

// 5 FALSY VALUES: 0, '', undefind, null, NaN!

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Kiro"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all !");
// } else {
//   console.log("You should get a job !");
// }

// let height = 0;
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// EQUALITY OPERATORS!!!

// const age = 18;
// if (age === 18) console.log("Person is an adult!");
// else console.log("Person is not an adult!");

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // && - AND
// console.log(hasDriversLicense || hasGoodVision); // || - OR
// console.log(!hasDriversLicense); // ! - NOT

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

// Switch Statement!
// Switch statement does a strict comparison!

// const day = "monday";
// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
// }
// // Challenge: Do the same thing but with if/else statment!-_- !

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend");
// } else {
//   console.log("Not a valid day!");
// }

// THE CONDITIONAL (Ternary) OPERATOR !

const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
