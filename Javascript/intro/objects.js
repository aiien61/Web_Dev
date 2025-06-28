let houseKeeper = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper.name);

// constructor function
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name,
    this.yearsOfExperience = yearsOfExperience,
    this.cleaningRepertoire = cleaningRepertoire,
    this.clean = function () {
        console.log("Cleaning in progress...");
    }
}

let houseKeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "lobby", "bedroom"]);
console.log(houseKeeper1.cleaningRepertoire);
houseKeeper1.clean();

// objects' methods
function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name,
    this.age = age,
    this.hasWorkPermit = hasWorkPermit,
    this.languages = languages,
    this.moveSuitcase = function () {
        console.log("Move the suitcase.")
    }
}

let bellboy1 = new BellBoy("Tom", 20, true, ["English", "French"]);
console.log(bellboy1.name);
bellboy1.moveSuitcase();