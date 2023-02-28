export default class Product {
    id: string;
    purchasePrice: number;
    selllingPrice: number;
    sellingPriceMember: number;
    stock: number;

    /**
     * constructor
        */
    public constructor(id: string, purchasePrice: number, selllingPrice: number, sellingPriceMember: number, stock: number) {
        this.id = id
        this.purchasePrice = purchasePrice
        this.selllingPrice = selllingPrice
        this.sellingPriceMember = sellingPriceMember
        this.stock = stock
    }

}