import OfferRepository from '../Repository/OfferRepository';

export default class OfferController {
    id: string;
    name: string;
    price: number;
    priceMembers: number;
    description: string;
    nbproducts: number;
    productIds: string[];
    subcatIds: string[];
    catIds: string[];
    image: string;
    public categoryOccurences: { key: string, value: number }[] = [];
    public subcategoryOccurences: { key: string, value: number }[] = [];
    public productOccurences: { key: string, value: number }[] = [];

    constructor(id?: string, name?: string, price?: number, priceMembers?: number, description?: string, nbproducts?: number, productsID?: string[], subcatsID?: string[], catsID?: string[], image?: string) {
        if (id) this.id = id
        else this.id = ''
        if (name) this.name = name
        else this.name = ''
        if (price) this.price = price
        else this.price = 0
        if (priceMembers) this.priceMembers = priceMembers
        else this.priceMembers = 0
        if (description) this.description = description
        else this.description = ''
        if (nbproducts) this.nbproducts = nbproducts
        else this.nbproducts = 0
        if (productsID) this.productIds = productsID
        else this.productIds = []
        if (subcatsID) this.subcatIds = subcatsID
        else this.subcatIds = []
        if (catsID) this.catIds = catsID
        else this.catIds = []
        if (image) this.image = image
        else this.image = ''
    }

    setDescription(description: string) {
        this.description = description
    }
}