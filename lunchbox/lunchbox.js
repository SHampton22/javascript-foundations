class LunchBox {
    constructor(lunchBox) {
        this.owner = lunchBox.owner;
        this.material = lunchBox.madeOf;
        this.shape = lunchBox.shape;
        this.color = lunchBox.color;
        this.snacks = [];
    }

    acquireSnack(snack) {
        this.snacks.push(snack);
        this.snacks[0].isInLunchBox = true;
    }

    findHealthySnacks() {
        var healthySnacks = [];
        healthySnacks.push(this.snacks[1].type);
        healthySnacks.push(this.snacks[2].type);
        return healthySnacks;
        
    }

}

module.exports = LunchBox;
