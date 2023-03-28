import { defineComponent } from "vue";
import "../../assets/style/payement-modal.css"

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {

    },
    // type inference enabled
    props: {

    },
    data() {
        const payementType: string = "";
        return {
            payementType
        }
    },
    methods: {
        unshowModal(idModal : string) {
            this.$emit('unshowModal', idModal);
        },
        showClientNameModal(payementType: string){
            this.$emit('showClientNameModal', payementType);
        },

    },
    mounted() {

    },
})
