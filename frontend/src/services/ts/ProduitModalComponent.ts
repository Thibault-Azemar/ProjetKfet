import ProduitModalComponent from "../../components/ProduitModalComponents.vue"
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

    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})