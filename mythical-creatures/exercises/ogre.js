
class Ogre {
    constructor(ogreObject) {
        this.name = ogreObject.name
        this.home = ogreObject.abode || 'Swamp';
        this.swings = 0;
    }

    encounter(human) {
        human.encounterCounter++;  
    }

    swingAt(human) {
        this.swings++;
    }
}



module.exports = Ogre;