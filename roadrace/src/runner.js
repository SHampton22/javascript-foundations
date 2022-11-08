class Runner {
    constructor(name, age) {
        this.age = age;
        this.name = name;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = [];
    }

    runSomeMiles(miles) {
        this.milesRun += miles;
        this.fitness += miles;
    }

    stretch() {
        this.fitness += .5;
    }

    runRace(race, length) {
        this.completedRaces.push(race);
        this.milesRun = length;
        this.fitness += length
    }

}

module.exports = Runner;
