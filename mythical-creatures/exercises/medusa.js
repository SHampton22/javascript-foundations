var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(victim) {
        victim = new Statue(victim.name)
        this.statues.push(victim);
        console.log(this.statues);
    }

}






module.exports = Medusa;





