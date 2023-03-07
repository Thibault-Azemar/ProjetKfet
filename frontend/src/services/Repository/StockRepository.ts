import Config from '../../config';
import Category from '../model/CategoryModel';
import Subcategory from '../model/SubcategoryModel';
import Product from '../model/ProductModel';

export default class StockRepository {

    public getStocks(): Promise<Category[]> {
        const API_URL = Config.API_URL;
        const stock: Category[] = [];
        return fetch(API_URL + 'stock/cat/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data =>
                data.forEach((data: any) => {
                    console.log(data)
                    const category = new Category(data.id, data.name, data.image);
                    console.log(data.subCategories)
                    data.subCategories.forEach((data: any) => {
                        const subcategory = new Subcategory(data.id, data.name, data.image);
                        data.products.forEach((data: any) => {
                            console.log(data.sellingPrice)
                            const product = new Product(data.id, data.name, data.purchasePrice, data.sellingPrice, data.sellingPriceMembers, data.stock, data.image);
                            subcategory.addProduct(product);
                        })
                        category.addSubcategory(subcategory);
                    })
                    stock.push(category);
                    console.log(stock)
                })
            )
            .then(() => {
                return Promise.resolve(stock);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
}