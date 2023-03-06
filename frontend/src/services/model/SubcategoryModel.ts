import Product from './ProductModel';
export default class Subcategory {
    products: Product[] = [];
    id: string;

    /**
     * constructor
    */
    public constructor(id: string) {
        this.id = id
    }
}