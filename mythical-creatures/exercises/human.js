
class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = 0;
    }

    noticesOgre() {
        if (this.encounterCounter < 3) {
            return false;
        } else {
            this.encounterCounter = 0;
        // swingAt();
            return true;
        }
       
    }
}



module.exports = Human;