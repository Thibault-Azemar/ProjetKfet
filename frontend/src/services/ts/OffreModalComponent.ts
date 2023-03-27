import {defineComponent} from "vue";
import OffreModalComponent from "@/components/OffreModalComponent.vue";
import "../../assets/style/offre-modal.css";
import Offer from '../Controller/OfferController';


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        OffreModalComponent,
    },
    props: {
        offer :{
            type: Offer,
            required: false
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        plus(id : string) {
            const input = document.getElementById(id) as HTMLInputElement
            if(!input)return;
            let value : number = parseInt(input.value)
            value++
            input.value = String(value)
        },
        minus(id : string) {
            const input = document.getElementById(id) as HTMLInputElement
            if(!input)return;
            let value : number = parseInt(input.value)
            if(value === 0) return;
            value--
            input.value = String(value)
        }
    },


})