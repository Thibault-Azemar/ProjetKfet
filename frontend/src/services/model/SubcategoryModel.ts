import Product from './ProductModel';
export default class Subcategory {
    products: Product[] = [];
    id: string;
    name: string;
    image: string;

    /**
     * constructor
    */
    public constructor(id: string, name: string, image?: string) {
        this.id = id
        this.name = name
        if (image) {
            this.image = image
        }
        else {
            this.image = "https://via.placeholder.com/150"
        }
    }

    public addProduct(product: Product) {
        this.products.push(product)
    }

}