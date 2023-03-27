import Product from "../model/ProductModel";

export default class Commande {

    id: string;
    date: Date;
    total: number;
    totalKfetier: number;
    paymentMethod: string;
    products: Product[];
    name: string;
    isPaid: boolean;

    constructor(date?: Date, total?: number, isPaid?: boolean, paymentMethod?: string, products?: Product[], name?: string, id?: string, totalKfetier?: number) {
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
    }
    addProduct(product: Product) {
        this.products.push(product);
    }
    removeProduct(product: Product) {
        this.products.splice(this.products.indexOf(product), 1);
    }
    updateTotal() {
        this.total = 0;
        this.totalKfetier = 0;
        this.products.forEach((product) => {
            this.total += product.sellingPrice;
            this.totalKfetier += product.sellingPriceMembers;
        });
    }

}