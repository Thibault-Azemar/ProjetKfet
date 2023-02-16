import OffresComponent from '../../components/OffresComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/offres.css'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        OffresComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {

    },
    methods:{

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})