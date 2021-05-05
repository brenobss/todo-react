class Item {

    static id = 0

    constructor(text) {
        this.id = Item.id++;
        this.text = text;
        this.isDone = false;
    }
}

export default Item;