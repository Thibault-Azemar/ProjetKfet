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
        let popUpMessage: String | undefined;
        let popUpButtons: Number | undefined;
        let popUpDelete: Boolean | undefined;
        const offers: Offer[] = [];
        return {
            offers,
            popUpMessage,
            popUpButtons,
            popUpDelete
        }
    },
    methods: {
        showSimplePopUp(idProduit: string, del: boolean, buttons: number) {
            //ajouter id offre à la place de nom produit + passé l'id quelque part dans la modal pour pouvoir supprimer
            if (del) {
                this.popUpMessage = "Voulez vous supprimer " + idProduit + " ?";
            }
            else {
                this.popUpMessage = "test";
            }
            this.popUpButtons = 1;
            this.popUpDelete = del;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
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

    },
    mounted() {
        this.getOffers();
    },


})