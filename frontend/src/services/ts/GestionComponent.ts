import GestionComponent from '../../components/GestionComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/gestion.css'
import OffresComponent from "../../components/OffresComponent.vue";
import UsersComponent from "../../components/UsersComponent.vue";
import CategoriesComponent from "../../components/CategoriesComponent.vue";
import StockComponent from "../../components/StockComponent.vue";
import OffreModalComponent from "../../components/OffreModalComponent.vue";
import ProduitModalComponent from "../../components/ProduitModalComponent.vue";
import UserModalComponent from "../../components/UserModalComponent.vue";
import User from "../Controller/UserController"
import Produit from "../model/ProductModel";
import Offer from '../Controller/OfferController';
import SimpleModalComponent from "../../components/SimpleModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        GestionComponent,
        OffresComponent,
        UsersComponent,
        CategoriesComponent,
        StockComponent,
        ProduitModalComponent,
        UserModalComponent,
        OffreModalComponent,
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {
        const value = 'Stock';
        let isUser: User | undefined;
        let isProduit: Produit | undefined;
        let isOffer: Offer | undefined;
        let popUpMessage: String | undefined;
        let popUpButtons: Number | undefined;
        let popUpDelete: Boolean | undefined;
        let objetType: String | undefined;
        let deleteObj : any;
        return {
            value,
            isUser,
            isProduit,
            isOffer,
            popUpMessage,
            popUpButtons,
            popUpDelete,
            deleteObj,
            objetType
        }
    },
    methods: {
        showAddModal() {
            let modal;
            if (this.value === "Stock") {
                modal = document.getElementById("produitModal");
                if (modal) modal.style.display = "block";
            }
            if (this.value === "Offres") {
                modal = document.getElementById("offreModal");
                if (modal) modal.style.display = "block";
            }
            if (this.value === "Categories") {
                modal = document.getElementById("categorieModal");
                if (modal) modal.style.display = "block";
            }
            if (this.value === "Users") {
                modal = document.getElementById("userModal");
                if (modal) modal.style.display = "block";
            }
        },
        updateUser(user: User) {
            this.isUser = user;
            this.showAddModal();
        },
        updateProduct(produit: Produit) {
            this.isProduit = produit;
            this.showAddModal();
        },
        updateOffer(offer: Offer) {
            this.isOffer = offer;
            this.showAddModal();
        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
            this.isUser = undefined;
            this.isProduit = undefined;
        },
        deleteObjet(objet: any, message: string, type: string) {
            this.popUpMessage = message;
            this.popUpButtons = 2;
            this.popUpDelete = true;
            this.objetType = type;
            this.deleteObj = objet;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})