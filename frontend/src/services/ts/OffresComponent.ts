import OffresComponent from '../../components/OffresComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/offres.css'
import SimpleModalComponent from "../../components/SimpleModalComponent.vue";
import OfferRepository from '../Repository/OfferRepository';
import Offer from '../Controller/OfferController';


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
    },
    data() {
        const offers: Offer[] = [];
        return {
            offers,
        }
    },
    methods: {
        deleteOffer(objet: Offer) {
            const message = "Voulez-vous vraiment supprimer l'offre " + objet.name + " ?";
            const type = "offer";
            this.$emit('deleteObjet', objet, message, type );
        },
        getOffers() {
            const OfferRepo = new OfferRepository();
            OfferRepo.getOffers().then((offers: Offer[]) => {
                offers.forEach((offer: Offer) => {
                    let products = ""
                    if (offer.productIds != null) {
                        for (let i = 0; i < offer.productIds.length; i++) {
                            products += offer.productIds[i] + ", "
                        }
                    }
                    let subcats = ""
                    if (offer.subcatIds != null) {
                        for (let i = 0; i < offer.subcatIds.length; i++) {
                            subcats += offer.subcatIds[i] + ", "
                        }
                    }
                    let cats = ""
                    if (offer.catIds != null) {
                        for (let i = 0; i < offer.catIds.length; i++) {
                            cats += offer.catIds[i] + ", "
                        }
                    }
                    offer.description = offer.nbproducts + " parmis " + products + ", " + subcats + ", " + cats;
                })
                this.offers = offers;
                console.log(offers)
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