//Calculate average score then compare the team's average score and see if they are draw!
//Bonus 1 : Requirement for minimum score of 100 points!
// Bonus 2 : Minimum score applies to a draw! Draw happens only if the teams have the same score and higher point's then 100! Or no one win's!
const teamDolphins = (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 123) / 3;
const requirement = 100;
if (teamDolphins > teamKoalas && teamDolphins >= requirement) {
  console.log(
    `Team Dolphins win's the trophy with (${teamDolphins}) over Team Koalas (${teamKoalas})!`
  );
} else if (teamKoalas > teamDolphins && teamKoalas >= requirement) {
  console.log(
    `Team Koalas win's the trophy with (${teamKoalas}) over Team Dolphins (${teamDolphins})!`
  );
} else if (
  teamDolphins === teamKoalas &&
  teamDolphins >= requirement &&
  teamKoalas >= requirement
) {
  console.log(`DRAW!!! Both win the trophy!
  Team Dolphins's score is ${teamDolphins}
  Team Koalas's score is ${teamKoalas}`);
} else {
  console.log(`No team passed the minimum requirement!
  Team Dolphins's score is ${teamDolphins}
  Team Koalas's score is ${teamKoalas}`);
}
