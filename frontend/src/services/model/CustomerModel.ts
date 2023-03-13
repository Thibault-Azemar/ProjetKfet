export default class Customer {
    name: string;
    firstname: string;
    money: number;
    id: string;
    group: string;

    /**
     * constructor
     * @param name
     * @param firstname
     * @param money
     * @param id
        */
    public constructor(name: string, firstname: string, money: number, id: string, group: string) {
        this.name = name;
        this.firstname = firstname;
        this.money = money;
        this.id = id;
        this.group = group;
    }
}