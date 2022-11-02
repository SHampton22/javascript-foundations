const Direwolf = require("./direwolf");

class Stark {
    constructor(stark) {
        this.name = stark.name;
        this.location = stark.area || 'Winterfell';
        this.safe = false;
    }

    
    sayHouseWords() {
        if (this.safe === true) {
            return 'The North Remembers';
        } else {
            return 'Winter is Coming';
        } 
    }

    callDirewolf(name) {
        var direwolf = new Direwolf(name, this.location);
        direwolf.protect(this);
        return direwolf;

        
    }
}






module.exports = Stark;