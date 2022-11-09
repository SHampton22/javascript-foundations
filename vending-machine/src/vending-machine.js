class VendingMachine {
    constructor(machine) {
        this.id = machine.id;
        this.isBroken = machine.isBroken;
        this.snacks = [];

    }

    addSnacks(snack) {
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].name.includes(snack.name)) {
                return 'Sorry, that snack is already stocked! Try adding a different snack.'
            }
        }
        this.snacks.push(snack);
    }

    purchaseSnack(snackName, snackPrice) {
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].itemsInStock === 0) {
                return 'Sorry, no items in stock. Try another item.';
            } 
            if (snackPrice < this.snacks[i].price) {
                return 'Sorry, not enough payment. Please add more money.';
            }
            if (this.snacks[i].name.includes(snackName)) {
                this.snacks[i].itemsInStock--;
                var diff = snackPrice - this.snacks[i].price
                return `Success! Here is $${diff} back!`;
            }
        }
    }

}

module.exports = VendingMachine;
