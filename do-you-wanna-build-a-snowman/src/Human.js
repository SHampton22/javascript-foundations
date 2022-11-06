var Snowman = require('./Snowman');

class Human {
    constructor(name) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        }
    }

    gatherMaterials(string, number) {
        this.materials[string] += number;
    }

    buildASnowman() {
        return new Snowman(this.materials)
    }

    placeMagicHat(snowman) {
       if (snowman.canWearMagicHat() === true) {
        return 'Woah, this snowman is coming to life!';
       } else {
        return 'I guess I didn\'t build it correctly.'
       }
    }

}

module.exports = Human;