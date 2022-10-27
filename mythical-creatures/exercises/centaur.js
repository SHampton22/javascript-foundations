var count = 0;
class Centaur {
    constructor(newCentaur) {
        this.name = newCentaur.name;
        this.breed = newCentaur.type;
        this.cranky = false;
        this.standing = true;
        this.layingDown = false;
    }
   
    shootBow() {
        
        if (count === 3 || this.layingDown === true) {
            this.cranky = true;
            // need cranky to de dynamic
            return 'NO!';
        } else {
            count += 1;
            return 'Twang!!!';
        }
    }


    run() {
        if ( count === 3 || this.layingDown === true) {
            return 'NO!';
        } else {
            this.cranky = true;
            return 'Clop clop clop clop!!!';
        }
    }

    sleep() {
        if (this.standing === true){
            return 'NO!'
        } else {
            this.cranky = false;
            count -= 1;
            return 'ZZZZ';
        }
    }


    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.layingDown === true) {
            return 'Not while I\'m laying down!';
        } else {
            this.cranky = false;
        }
    }
    
}






module.exports = Centaur;