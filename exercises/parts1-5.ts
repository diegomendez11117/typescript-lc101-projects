// URL for the instructions:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html

// // Part 1: Declare (5) Variables With Type
// let spacecraftName: string = 'Determination';
// const speedMph: number = 17500;
// const kilometersToMars: number = 225000000;
// const kilometersToTheMoon: number = 384400;
// const milesPerKilometer: number = 0.621;

// // Part 2: Print Days to Mars
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;

// // Code an output statement here (use a template literal):

// console.log(
//   `From Earth to Mars there're ${Math.round(
//     daysToMars
//   )} days using the Space Craft "${spacecraftName}"`
// );

// // Part 3: Create a Function ("getDaysToLocation")

// let getDaysToLocation = function (kilometersAway: number): number {
//   const milesAway: number = kilometersAway * milesPerKilometer;
//   const hoursAway: number = milesAway / speedMph;
//   const daysAway: number = hoursAway / 24;
//   return Math.round(daysAway);
// };

// // Move your output statement from part 2 here. Update the template literal to call
// console.log(
//   `From Earth to Mars there're ${getDaysToLocation(
//     daysToMars
//   )} days using the Space Craft "${spacecraftName}"`
// );
// // the function and print the outputs for a Mars trip and a moon trip.
// console.log(
//   `From Earth to the Moon there're ${getDaysToLocation(
//     kilometersToTheMoon
//   )} days using the Space Craft "${spacecraftName}"`
// );

// Part 4: Create a Spacecraft Class
class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    const milesAway: number = kilometersAway * this.milesPerKilometer;
    const hoursAway: number = milesAway / this.speedMph;
    const daysAway: number = hoursAway / 24;
    return Math.round(daysAway);
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
 }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(
  `From Earth to the Moon there're ${spaceShuttle.getDaysToLocation(
    384400
  )} days using the Space Craft "${spaceShuttle.name}"`
);

console.log(
  `From Earth to the Mars there're ${spaceShuttle.getDaysToLocation(
    225000000
  )} days using the Space Craft "${spaceShuttle.name}"`
);

// Part 5: Export and Import the SpaceLocation Class

// Add the required import statement BEFORE the part 1 concent.
import { SpaceLocation } from './SpaceLocation';

const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
// Add the printDaysToLocation function to the Spacecraft class.
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
// Paste in the code from step 6 here:
