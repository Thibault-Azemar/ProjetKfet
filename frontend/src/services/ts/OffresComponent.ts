import OffresComponent from '../../components/OffresComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/offres.css'
import SimpleModalComponent from "../../components/SimpleModalComponent.vue";
import OfferRepository from '../Repository/OfferRepository';
import Offer from '../Controller/OfferController';
import StockRepository from '../Repository/StockRepository';
import Category from '../model/CategoryModel';
import Product from '../model/ProductModel';
import Subcategory from '../model/SubcategoryModel';


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        OffresComponent,
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
        categories: {
            type: Array as () => Category[],
            required: true
        },
    },
    data() {
        const offers: Offer[] = [];
        return {
            offers,
            cats: this.categories,
        }
    },
    methods: {
        deleteOffer(objet: Offer) {

            const message = "Voulez-vous vraiment supprimer l'offre " + objet.name + " ?";
            const type = "offer";
            console.log(objet)
            this.$emit('deleteObjet', objet, message, type);
        },
        getOffers() {
            const OfferRepo = new OfferRepository();
            OfferRepo.getOffers().then((offers: Offer[]) => {
                offers.forEach((offer: Offer) => {
                    const nameProducts: string[] = []
                    this.cats.forEach((category: Category) => {
                        if (offer.catIds != null) {
                            offer.catIds.forEach((catId: string) => {
                                if (catId == category.id) {
                                    nameProducts.push(category.name)
                                    if (offer.categoryOccurences != null) {
                                        const occurence = offer.categoryOccurences.find((occurence) => occurence.key == category.id)
                                        if (occurence != null) {
                                            offer.categoryOccurences.push({ key: category.id, value: occurence.value + 1 })
                                        } else {
                                            offer.categoryOccurences.push({ key: category.id, value: 1 })
                                        }
                                    } else {
                                        offer.categoryOccurences = []
                                        offer.categoryOccurences.push({ key: category.id, value: 1 })
                                    }
                                }
                            }
                            )
                        }
                        category.subcategories.forEach((subcategory: Subcategory) => {
                            if (offer.subcatIds != null) {
                                offer.subcatIds.forEach((subcatId: string) => {
                                    if (subcatId == subcategory.id) {
                                        nameProducts.push(subcategory.name)
                                    }
                                })
                            }
                            subcategory.products.forEach((product: Product) => {
                                if (offer.productIds != null) {
                                    offer.productIds.forEach((prodId: string) => {
                                        if (prodId == product.id) {
                                            nameProducts.push(product.name)
                                        }
                                    })
                                }
                            })
                        })
                    })
                    offer.description = offer.nbproducts + " produits parmis : "
                    nameProducts.forEach((nameProduct: string) => {
                        offer.description += nameProduct + ", "
                    }
                    )
                    offer.description = offer.description.substring(0, offer.description.length - 2)

                })
                this.offers = offers;
            }
            );
            return this.offers;
        },
        updateOffer(offer: Offer) {
            this.$emit('updateOffer', offer);
        }

    },
    mounted() {
        this.getOffers();
    },


})