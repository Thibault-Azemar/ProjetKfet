import Customer from "./CustomerModel";

export default class Group {
    customers: Customer[] = [];
    id: string;
    name: string;

    /**
     * constructor
     * @param name
     * @param id
     * @param accounts
        */
    public constructor(name: string, id: string, accounts?: Customer[]) {
        this.name = name;
        this.id = id;
        if (accounts) {
            this.customers = accounts;
        }
    }

    public addCustomer(customer: Customer) {
        this.customers.push(customer)
    }
}