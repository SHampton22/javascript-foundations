class Magician {
    
    constructor(magician) {
        this.name = `The Great ${magician.name}`;
        this.assistant = magician.assistant;
        this.clothing = magician.clothing;
        this.favoriteAccessory = magician.clothing || 'top hat';
        this.confidencePercentage = 10;
    }

    performIncantation(incantation) {
        return `${incantation}!`.toUpperCase();
    }

    performTrick() {
        this.confidencePercentage += 10;
        if (this.clothing === 'cape') {
            return 'PULL DOVE FROM SLEEVE';
        } else {
            return 'PULL RABBIT FROM TOP HAT';
        }   
    }

    performShowStopper() {
        if (this.confidencePercentage <= 100 || this.assistant === false) {
            return 'Oh no, this trick is not ready!';
        } else {
            return 'WOW! The magician totally just sawed that person in half!';
        }
    }
}






module.exports = Magician;