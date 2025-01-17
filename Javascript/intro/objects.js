let housekeeper = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(housekeeper.name);

// constructor function
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name,
    this.yearsOfExperience = yearsOfExperience,
    this.cleaningRepertoire = cleaningRepertoire
}

let housekeeper1 = new HouseKeeper("Jane", 12, ["bathroom", "lobby", "bedroom"]);
console.log(housekeeper1.cleaningRepertoire);

// objects' methods
function BellBoy(name, hasWorkPermit) {
    this.name = name,
    this.hasWorkPermit = hasWorkPermit,
    this.moveSuitcase = function () {
        console.log("Move the suitcase.")
    }
}

let bellboy1 = new BellBoy("Tom", true);
console.log(bellboy1.name);
bellboy1.moveSuitcase();