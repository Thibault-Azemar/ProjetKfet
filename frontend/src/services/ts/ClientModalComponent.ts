import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import User from "@/services/Crontroller/UserController";


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        ClientModalComponent,
    },
    props: {
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