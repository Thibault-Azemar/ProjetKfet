import Subcategory from "./SubcategoryModel";
export default class Category {
    subcategories: Subcategory[] = [];
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
            this.image = "../../assets/pictures/offer.jpg"
        }
    }

    public addSubcategory(subcategory: Subcategory) {
        this.subcategories.push(subcategory)
    }
}