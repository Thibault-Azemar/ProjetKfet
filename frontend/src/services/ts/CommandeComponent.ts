import {defineComponent} from "vue";
import CommandeComponent from "../../components/CommandeComponent.vue";
import '../../assets/style/commande.css'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
      CommandeComponent
    },
    // type inference enabled
    props: {

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