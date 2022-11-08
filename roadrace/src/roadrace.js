class Roadrace {
    constructor(roadRace) {
        this.name = roadRace.title;
        this.location = roadRace.city;
        this.distance = null;
        this.participants = [];

    }

    setDistance(distance) {
        this.distance = distance;
        return `The ${this.name} in ${this.location} is a ${distance} mile race.`;
    }

    registerParticipants(runner) {
        this.participants.push(runner);
    }

    completeRace() {
        for (var i = 0; i < this.participants.length; i++) {
            this.participants[i].completedRaces.push(this.name)
            this.participants[i].milesRun = this.distance;
        } console.log(this.participants);

    }

}

module.exports = Roadrace;
