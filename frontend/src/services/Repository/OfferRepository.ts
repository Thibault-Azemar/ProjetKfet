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
                    resolve(offers);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }
    public addOffer(name: string, description: string, price: number, image: string): Promise<Offer> {
        return new Promise((resolve, reject) => {
            fetch(Config.API_URL + 'offer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, description: description, price: price, image: image })
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
            fetch(Config.API_URL + 'offer/' + id, {
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
}