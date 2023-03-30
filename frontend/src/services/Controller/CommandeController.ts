import Customer from "../model/CustomerModel";
import Product from "../model/ProductModel";

export default class Commande {

    id: string;
    date: Date;
    total: number;
    totalKfetier: number;
    paymentMethod: string;
    products: { [id: number]: Product };
    customer: Customer;
    name: string;
    isPaid: boolean;
    state: string;

    constructor(date?: Date, total?: number, isPaid?: boolean, paymentMethod?: string, products?: Product[], name?: string, id?: string, totalKfetier?: number, customer?: Customer, state?: string) {
        if (id) {
            this.id = id;
        }
        else
            this.id = "uuid"
        if (date) {
            this.date = date;
        }
        else
            this.date = new Date();
        if (total) {
            this.total = total;
        }
        else
            this.total = 0;
        if (totalKfetier) {
            this.totalKfetier = totalKfetier;
        }
        else
            this.totalKfetier = 0;
        if (paymentMethod) {
            this.paymentMethod = paymentMethod;
        }
        else
            this.paymentMethod = "";
        if (products) {
            this.products = products;
        }
        else
            this.products = [];
        if (name) {
            this.name = name;
        }
        else
            this.name = "";
        if (isPaid) {
            this.isPaid = isPaid;
        }
        else
            this.isPaid = false;
        if (customer) {
            this.customer = customer;
        }
        else
            this.customer = new Customer();
        if (state) {
            this.state = state;
        }
        else
            this.state = "";
    }
    addProduct(product: Product): number {
        if (Object.keys(this.products).length === 0) {
            this.products[0] = product;
            return 1;
        }
        else {
            const maxId = Math.max(...Object.keys(this.products).map((id) => parseInt(id)));
            this.products[maxId + 1] = product;
            return maxId + 1;
        }
    }
    removeProduct(index: number) {
        delete this.products[index];
        this.updateTotal();
    }
    updateTotal() {
        this.total = 0;
        this.totalKfetier = 0;
        Object.values(this.products).forEach((product: Product) => {
            this.total += product.sellingPrice;
            this.totalKfetier += product.sellingPriceMembers;
        });
    }

}