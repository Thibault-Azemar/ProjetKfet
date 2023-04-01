export default class Product {
    id: string;
    name: string;
    purchasePrice: number;
    sellingPrice: number;
    sellingPriceMembers: number;
    stock: number;
    image: string;
    subcategory: string;
    state: string

    /**
     * constructor
        */
    public constructor(id?: string, name?: string, purchasePrice?: number, selllingPrice?: number, sellingPriceMember?: number, stock?: number, subcategory?: string, image?: string, state?: string) {
        if (id) {
            this.id = id;
        }
        else {
            this.id = "uuid"
        }
        if (name) {
            this.name = name;
        }
        else {
            this.name = ""
        }
        if (purchasePrice) {
            this.purchasePrice = purchasePrice;
        }
        else {
            this.purchasePrice = 0
        }
        if (selllingPrice) {
            this.sellingPrice = selllingPrice;
        }
        else {
            this.sellingPrice = 0
        }
        if (sellingPriceMember) {
            this.sellingPriceMembers = sellingPriceMember;
        }
        else {
            this.sellingPriceMembers = 0
        }
        if (stock) {
            this.stock = stock;
        }
        else {
            this.stock = 0
        }
        if (subcategory) {
            this.subcategory = subcategory;
        }
        else {
            this.subcategory = ""
        }
        if (image) {
            this.image = image
        }
        else {
            this.image = "./src/assets/pictures/product/default_meal.jpg"
        }
        if (state) {
            this.state = state
        }
        else {
            this.state = ""
        }
    }

    setState(state: string) {
        this.state = state
    }

}