import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import Customer from "../model/CustomerModel"


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        ClientModalComponent,
    },
    props: {
        customer : {
            type : Customer,
            require : false
        }
    },
    data() {

    },
    methods:{
        unshowModal(idModal: string) {
            this.$emit('unshowModal',idModal);
        },
        addCompte(){

        },
        editCompte(){

        }
    }

})