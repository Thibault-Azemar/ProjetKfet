import CategoriesComponent from '../../components/CategoriesComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/categories.css'


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        CategoriesComponent
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