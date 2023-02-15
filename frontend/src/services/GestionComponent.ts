import GestionComponent from '../components/GestionComponent.vue'
import { defineComponent } from 'vue'
import '../assets/style/gestion.css'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        GestionComponent
    },
    // type inference enabled
    /*props: {
        name: String ,
        msg: { type: String, required: true, default:'test'}
    },*/
    data() {
        return {

        }
    },
    methods:{

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})