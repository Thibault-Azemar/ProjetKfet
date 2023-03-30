import { defineComponent } from 'vue'
import EditCommandModalComponent from '../../components/EditCommandModalComponent.vue'
import Commande from "@/services/Controller/CommandeController";

// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        EditCommandModalComponent
    },
    props: {
        commande: {
            type: Commande,
            required: true
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal : string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        editProductState(){

        }
    }
})