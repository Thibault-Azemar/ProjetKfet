import ProduitModalComponent from "../../components/ProduitModalComponent.vue"
import {defineComponent} from 'vue'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ProduitModalComponent
    },
    // type inference enabled
    props: {},
    data() {

    },
    methods: {
        unshowModal(idModal:string) {
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display = "none";
        }
    }
})