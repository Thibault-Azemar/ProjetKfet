import ClientsComponent from '../../components/ClientsComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
//import OffresComponent from "../../components/OffresComponent.vue";


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        ClientsComponent,
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {

    },
    methods:{
        showAddModal(){

        },
        updateSolde(){

        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})