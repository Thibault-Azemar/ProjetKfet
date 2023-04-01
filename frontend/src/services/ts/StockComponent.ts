import StockComponent from '../../components/StockComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/stock.css'
import Category from '../model/CategoryModel';
import StockRepository from '../Repository/StockRepository'
import Product from "@/services/model/ProductModel";
import User from "@/services/Controller/UserController";
import Subcategory from '../model/SubcategoryModel';

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        StockComponent
    },
    // type inference enabled
    props: {
        stock: {
            type: Array as () => Category[],
            required: true
        },
    },
    data() {
    },
    methods: {
        deleteProduct(objet: Product) {
            const message = "Voulez-vous vraiment supprimer le produit " + objet.name + " ?";
            console.log(this)
            const type = "product";
            this.$emit('deleteObjet', objet, message, type);
        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        updateProduct(produit: Product) {
            this.$emit('updateProduct', produit)

        },
    },
    beforeMount() {
    },
})