// common js
// let generateName = require("sillyname");

// module-based
import generateName from "sillyName";
import { randomSuperhero } from "superheroes";
let sillyName = generateName();
let superheroeName = randomSuperhero();

console.log(`My name is ${sillyName}`);
console.log(`I am a ${superheroeName}!`)