class Item {

    public id: number;
    public name: string;
    public time: string;
    public complete: boolean;

    constructor(id: number, name: string) {
        const date = new Date();
        this.id = id;
        this.name = name;
        this.time = date.toLocaleString();
        this.complete = false;
    }

    public finish() {
        this.complete = !this.complete;
        return this;
    }

}

export default Item;