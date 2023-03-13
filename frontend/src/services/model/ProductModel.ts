export default class Product {
    id: string;
    name: string;
    purchasePrice: number;
    sellingPrice: number;
    sellingPriceMembers: number;
    stock: number;
    image: string;
    subcategory: string;

    /**
     * constructor
        */
    public constructor(id: string, name: string, purchasePrice: number, selllingPrice: number, sellingPriceMember: number, stock: number, subcategory: string, image?: string) {
        this.id = id
        this.name = name
        this.purchasePrice = purchasePrice
        this.sellingPrice = selllingPrice
        this.sellingPriceMembers = sellingPriceMember
        this.stock = stock
        this.subcategory = subcategory
        if (image) {
            this.image = image
        }
        else {
            this.image = "https://via.placeholder.com/150"
        }
    }

}