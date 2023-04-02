import Customer from "../model/CustomerModel";
import Product from "../model/ProductModel";
import Offer from "../Controller/OfferController";

export default class Commande {

    id: string;
    date: Date;
    total: number;
    totalKfetier: number;
    paymentMethod: string;
    products: { [id: number]: Product };
    offers: { [id: number]: Offer };
    customer: Customer;
    name: string;
    isPaid: boolean;
    state: string;

    constructor(date?: Date, total?: number, isPaid?: boolean, paymentMethod?: string, products?: Product[], name?: string, id?: string, state?: string, totalKfetier?: number, customer?: Customer, offers?: Offer[]) {
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
        if (offers) {
            this.offers = offers;
        }
        else
            this.offers = [];
    }
    addProduct(product: Product, isOffer?: boolean): number {
        console.log(isOffer)
        if (Object.keys(this.products).length === 0) {
            this.products[0] = product;
            if (isOffer) {
                this.products[0].sellingPrice = 0;
                console.log(this.products[0].sellingPrice);
                this.products[0].sellingPriceMembers = 0;
            }
            return 1;
        }
        else {
            const maxId = Math.max(...Object.keys(this.products).map((id) => parseInt(id)));
            this.products[maxId + 1] = product;
            if (isOffer) {
                this.products[maxId + 1].sellingPrice = 0;
                console.log(this.products[maxId + 1].sellingPrice);
                this.products[maxId + 1].sellingPriceMembers = 0;
            }
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
        console.log(this.products)
        console.log(this.offers)
        Object.values(this.products).forEach((product: Product) => {
            this.total += product.sellingPrice;
            this.totalKfetier += product.sellingPriceMembers;
        });
        Object.values(this.offers).forEach((offer: Offer) => {
            this.total += offer.price;
            console.log(offer.price);
            this.totalKfetier += offer.priceMembers;
        }
        );
        console.log(this.total);
    }
    addOffer(offer: Offer) {
        console.log(offer)
        if (Object.keys(this.offers).length === 0) {
            console.log('cc')
            this.offers[0] = offer;
            return 1;
        }
        else {
            console.log('cc2')
            const maxId = Math.max(...Object.keys(this.offers).map((id) => parseInt(id)));
            this.offers[maxId + 1] = offer;
            return maxId + 1;
        }
        console.log(this.offers)
    }

}