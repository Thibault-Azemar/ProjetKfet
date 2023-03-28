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
import Customer from '../model/CustomerModel';
import Offer from '../Controller/OfferController';

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
        OffreModalComponent
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
        return {
            value,
            isUser,
            isProduit,
            isOffer,
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
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})