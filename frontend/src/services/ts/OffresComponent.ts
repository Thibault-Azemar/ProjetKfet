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