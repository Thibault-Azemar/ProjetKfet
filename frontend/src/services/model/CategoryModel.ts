import Subcategory from "./SubcategoryModel";
export default class Category {
    subcategories: Subcategory[] = [];
    id: string;

    /**
     * constructor
    */
    public constructor(id: string) {
        this.id = id
    }
}