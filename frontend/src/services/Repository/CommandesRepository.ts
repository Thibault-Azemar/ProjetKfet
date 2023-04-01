import Config from '../../config';
import Category from '../model/CategoryModel';
import Subcategory from '../model/SubcategoryModel';
import Product from '../model/ProductModel';
import Offer from '../Controller/OfferController';
import OfferRepository from './OfferRepository';
import StockRepository from './StockRepository';
import Commande from '../Controller/CommandeController';

export default class CommandesRepository {
    getCommandes(): Promise<Commande[]> {
        const url = Config.API_URL + 'command/all'; //TODO : change url to command/day
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return fetch(url, {
            method: 'GET',
            headers,
        })
            .then((response) => response.json())
            .then((json) => {
                const commandes: Commande[] = [];
                json.forEach((commande: any) => {
                    const products: Product[] = [];
                    commande.products.forEach((product: any) => {
                        console.log(product)
                        const productToAdd = new Product(product.id, product.product);
                        productToAdd.setState(product.state);
                        products.push(productToAdd);
                    });
                    const date = new Date(commande.date);
                    commandes.push(new Commande(date, commande.price, commande.isPaid, commande.paymentMethod, products, commande.name, commande.id, commande.state));
                    console.log(commandes)
                });
                return new Promise((resolve, reject) => {
                    commandes.sort((a, b) => a.date.getTime() - b.date.getTime());
                    resolve(commandes);
                });
            }
            );
    }
    addCommande(command: Commande, paymentMethod: string, name?: string): Promise<Commande> {
        const params = new URLSearchParams();
        if (paymentMethod === "Account") {
            params.append('paymentMethod', "Account");
            params.append('idcutomer', command.customer.id)
            if (command.customer.group == "kfetier") {
                params.append('value', command.totalKfetier.toString())
            }
            else {
                params.append('value', command.total.toString())
            }
        } else {
            params.append('paymentMethod', paymentMethod);
            if (name)
                params.append('name', name);
            params.append('price', command.total.toString())
        }
        params.append('idPaid', true.toString())
        const body: any[] = [];
        const productBody: any = {};
        Object.values(command.products).forEach((product) => {
            const name = product.name;
            const id = product.id;

            const productBody = {
                id,
                name,
            };
            body.push(productBody);
        });

        const url = Config.API_URL + 'command/add?' + params.toString();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '127.0.0.1:8080');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, remember-me');

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        };
        return fetch(url, options).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return response.json();
        });
    }

    public getOffers(): Promise<Offer[]> {
        const OfferRepo = new OfferRepository();
        const offers = OfferRepo.getOffers();
        return offers;
    }
    public getCategory(): Promise<Category[]> {
        const CatRepository = new StockRepository();
        return new Promise((resolve, reject) => CatRepository.getStocks().then((categories) => {
            console.log('Success:', categories);
            resolve(categories);
        }).catch((error) => {   // Error handling
            console.error('Error:', error);
            reject(error);
        }));
    }
    editProductState(idCommand: string, idProduct: string, state: string): Promise<number> {
        const params = { idCommand: idCommand, idProductInList: idProduct, state: state }
        const url = Config.API_URL + 'command/product?' + new URLSearchParams(params).toString();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return fetch(url, {
            method: 'PATCH',
            headers,
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                return response.json();
            });
    }

}