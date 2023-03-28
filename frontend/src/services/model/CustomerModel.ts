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
    public constructor(name?: string, firstname?: string, money?: number, id?: string, group?: string) {
        if (!id)
            this.id = "uuid";
        else
            this.id = id;
        if (!name)
            this.name = "";
        else
            this.name = name;
        if (!firstname)
            this.firstname = "";
        else
            this.firstname = firstname;
        if (!money)
            this.money = 0;
        else
            this.money = money;
        if (!group)
            this.group = "";
        else
            this.group = group;
    }
}