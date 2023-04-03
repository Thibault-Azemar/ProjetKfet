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
                            const product = new Product(data.id, data.name, data.purchasePrice, data.sellingPrice, data.sellingPriceMembers, data.stock, subcategory.name, data.image);
                            subcategory.addProduct(product);
                        })
                        subcategory.products.sort((a, b) => a.name.localeCompare(b.name));
                        category.addSubcategory(subcategory);
                    })
                    category.subcategories.sort((a, b) => a.name.localeCompare(b.name));
                    stock.push(category);
                    stock.sort((a, b) => a.name.localeCompare(b.name));
                })
            )
            .then(() => {
                return Promise.resolve(stock);
            }
            )
            .catch(error => {
                alert(error)
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
                alert(error)
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
                alert(error)
                return Promise.reject(error);
            }
            );
    }

    public editProduct(id: string, name: string, buyPrice: number, sellPrice: number, sellPriceMember: number, subcategory: string, image?: string): Promise<number> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        const buyPriceParam = buyPrice.toString();
        const sellPriceParam = sellPrice.toString();
        const sellPriceMemberParam = sellPriceMember.toString();
        if (image) {
            imageParam = image;
        }
        const params = { id: id, name: name, purchasePrice: buyPriceParam, sellingPrice: sellPriceParam, sellingPriceMembers: sellPriceMemberParam, idSubCategory: subcategory, image: imageParam }
        return fetch(API_URL + 'product?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }

    public deleteProduct(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id }
        return fetch(API_URL + 'product?' + new URLSearchParams(params), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public updateStock(product: Product) {
        const API_URL = Config.API_URL;
        const params = { id: product.id, stock: product.stock.toString() }
        return fetch(API_URL + 'product?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public addCategory(name: string, image?: string): Promise<number> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        if (image) {
            imageParam = image;
        }
        const params = { name: name }
        return fetch(API_URL + 'category/add?' + new URLSearchParams(params), {
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
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public editCategory(id: string, name: string, image?: string): Promise<number> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        if (image) {
            imageParam = image;
        }
        const params = { id: id, name: name }
        return fetch(API_URL + 'category?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public addSubCategory(name: string, category: string, image?: string): Promise<number> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        if (image) {
            imageParam = image;
        }
        const params = { name: name, idCategory: category }
        return fetch(API_URL + 'subcategory/add?' + new URLSearchParams(params), {
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
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public editSubCategory(name: string, category: string, image?: string): Promise<number> {
        const API_URL = Config.API_URL;
        let imageParam = image ? image : '';
        if (image) {
            imageParam = image;
        }
        const params = { name: name, id: category }
        return fetch(API_URL + 'subcategory?' + new URLSearchParams(params), {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public deleteSubcategory(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id }
        return fetch(API_URL + 'subcategory?' + new URLSearchParams(params), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
    public deleteCategory(id: string): Promise<number> {
        const API_URL = Config.API_URL;
        const params = { id: id }
        return fetch(API_URL + 'category?' + new URLSearchParams(params), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                return Promise.resolve(200);
            }
            )
            .catch(error => {
                alert(error)
                return Promise.reject(error);
            }
            );
    }
}