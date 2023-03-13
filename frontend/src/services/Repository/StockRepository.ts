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
                    const category = new Category(data.id, data.name, data.image);
                    data.subCategories.forEach((data: any) => {
                        const subcategory = new Subcategory(data.id, data.name, data.image);
                        data.products.forEach((data: any) => {
                            const product = new Product(data.id, data.name, data.purchasePrice, data.sellingPrice, data.sellingPriceMembers, data.stock, data.image);
                            subcategory.addProduct(product);
                        })
                        category.addSubcategory(subcategory);
                    })
                    stock.push(category);
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

    public getSubNewProduct(): Promise<Subcategory[]> {
        const API_URL = Config.API_URL;
        const subNewProduct: Subcategory[] = [];
        return fetch(API_URL + 'subcategory/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                data.forEach((data: any) => {
                    const subcategory = new Subcategory(data.id, data.name, data.image);
                    subNewProduct.push(subcategory);
                })
                return Promise.resolve(subNewProduct);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }

    public addProduct(name: string, buyPrice: number, sellPrice: number, sellPriceMember: number, subcategory: string, image?: string): Promise<Product> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        const buyPriceParam = buyPrice.toString();
        const sellPriceParam = sellPrice.toString();
        const sellPriceMemberParam = sellPriceMember.toString();
        if (image) {
            imageParam = image;
        }
        const params = { name: name, purchasePrice: buyPriceParam, sellingPrice: sellPriceParam, sellingPriceMembers: sellPriceMemberParam, idSubCategory: subcategory, image: imageParam }
        return fetch(API_URL + 'product/add?' + new URLSearchParams(params), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                return Promise.resolve(data);
            }
            )
            .catch(error => {
                console.error('Error:', error);
                return Promise.reject(error);
            }
            );
    }
}