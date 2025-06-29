import generateName from "sillyname";
import {randomSuperhero} from "superheroes";

const sillyName = generateName();
const heroName = randomSuperhero();

console.log(`The real name of the superhero ${heroName} is ${sillyName}.`);