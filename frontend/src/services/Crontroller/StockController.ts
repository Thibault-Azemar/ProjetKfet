import Category from "../model/CategoryModel";

export default class Stock {
    categories: Category[] = [];

    public constructor() {
        this.categories = []
    }
}