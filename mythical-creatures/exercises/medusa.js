var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }

    gazeAtVictim(person) {
        var victim = new Statue(person.name)
        if (this.statues.length <= 2) { 
            this.statues.push(victim);
        } else if (this.statues.length === 3) {
            this.statues.push(victim)
            var survivor = this.statues.shift()
            return new Person(survivor.name, 'relieved')
        }
    }

}






module.exports = Medusa;





