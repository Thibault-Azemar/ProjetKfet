import Config from '../../config';
import Category from '../model/CategoryModel';
import Subcategory from '../model/SubcategoryModel';
import Product from '../model/ProductModel';
import Offer from '../Controller/OfferController';
import OfferRepository from './OfferRepository';
import StockRepository from './StockRepository';

export default class CommandesRepository {

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

}