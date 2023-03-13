import ProduitModalComponent from "../../components/ProduitModalComponent.vue"
import Produit from "../Crontroller/StockController"
import {defineComponent} from 'vue'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ProduitModalComponent
    },
    // type inference enabled
    props: {
        produit :{
            type : Produit,
            require : false
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal:string) {
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display = "none";
        },
        updateStock(produit:Produit){
            this.$emit('updateStock',produit);
        }
    }
})