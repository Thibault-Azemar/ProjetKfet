import Offer from '../Controller/OfferController'
import Config from '../../config';
export default class OfferRepository {

    public getOffers(): Promise<Offer[]> {
        return new Promise((resolve, reject) => {
            fetch(Config.API_URL + 'offer/all')
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        reject(response);
                    }
                })
                .then((offers) => {
                    offers.sort((a: any, b: any) => a.name.localeCompare(b.name));
                    resolve(offers);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public addOffer(name: string, price: number, priceMember: number, nbProducts: number, image: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const params = { name: name, price: price.toString(), priceMember: priceMember.toString(), nbProducts: nbProducts.toString() }//TODO : add image
            fetch(Config.API_URL + 'offer/add?' + new URLSearchParams(params), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        reject(response);
                    }
                })
                .then((offer) => {
                    resolve(offer);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public deleteOffer(id: string): Promise<number> {
        return new Promise((resolve, reject) => {
            const params = { id: id }
            fetch(Config.API_URL + 'offer?' + new URLSearchParams(params), {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok) {
                        resolve(200);
                    }
                    else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public editOffer(id: string, name: string, description: string, price: number, image: string): Promise<number> {
        return new Promise((resolve, reject) => {
            fetch(Config.API_URL + 'offer/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, description: description, price: price, image: image })
            })
                .then((response) => {
                    if (response.ok) {
                        resolve(200);
                    }
                    else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    public addCategoryToOffer(idOffer: string, idCategory: string): Promise<number> {
        return new Promise((resolve, reject) => {
            const params = { id: idOffer, catId: idCategory }
            fetch(Config.API_URL + 'offer/category/add?' + new URLSearchParams(params), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok) {
                        resolve(200);
                    }
                    else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public addSubCategoryToOffer(idOffer: string, idSubCategory: string): Promise<number> {
        return new Promise((resolve, reject) => {
            const params = { id: idOffer, subcatId: idSubCategory }
            fetch(Config.API_URL + 'offer/subcat/add?' + new URLSearchParams(params), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok) {
                        resolve(200);
                    }
                    else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public addProductToOffer(idOffer: string, idProduct: string): Promise<number> {
        return new Promise((resolve, reject) => {
            const params = { id: idOffer, productId: idProduct }
            fetch(Config.API_URL + 'offer/product/add?' + new URLSearchParams(params), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => {
                    if (response.ok) {
                        resolve(200);
                    }
                    else {
                        reject(response);
                    }
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
}