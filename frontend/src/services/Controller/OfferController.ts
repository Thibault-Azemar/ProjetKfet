import OfferRepository from '../Repository/OfferRepository';

export default class OfferController {
    id: number;
    name: string;
    price: number;
    priceMembers: number;
    description: string;
    nbproducts: number;
    productIds: number[];
    subcatIds: number[];
    catIds: number[];
    image: string;

    constructor(id: number, name: string, price: number, priceMembers: number, description: string, nbproducts: number, productsID: number[], subcatsID: number[], catsID: number[], image: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.priceMembers = priceMembers;
        this.description = description;
        this.nbproducts = nbproducts;
        this.productIds = productsID;
        this.subcatIds = subcatsID;
        this.catIds = catsID;
        this.image = image;
    }

    setDescription(description: string) {
        this.description = description
    }
}