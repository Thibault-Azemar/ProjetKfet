
import {defineComponent} from "vue";
import ClientNameModalComponent from "../../components/ClientNameModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
       ClientNameModalComponent,
    },
    // type inference enabled
    props: {
        payementType: {
            type: String,
            required: true
        },
    },
    data() {

    },
    methods: {
       unshowModal(idModal :string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
       sendCommande() {

       }
    },
    mounted() {

    },
})