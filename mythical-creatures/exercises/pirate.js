class Pirate {
    constructor(pirateName, pirateJob) {
        this.name = pirateName;
        this.job = pirateJob || 'scallywag';
        this.cursed = false;
        this.booty = 0;
        
    }

    robShip() {
        if (this.booty === 500){
            this.cursed = true;
            return 'ARG! I\'ve been cursed!';
        }
        this.booty += 100;
        return "YAARRR!";
    }

    liftCurse() {
        if (this.booty <= 400) {
            return 'You don\'t need to lift a curse!';
        }
        this.booty = 200;
        this.cursed = false;
        return 'Your curse has been lifted!';
    }
    
}











module.exports = Pirate;

