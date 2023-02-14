import MenuComponent from '../components/MenuComponent.vue'
import { defineComponent } from 'vue'
import './assets/style/menu.css'

console.log('MenuComponent: ', MenuComponent)

export default defineComponent({

    components:{
        MenuComponent
    },
    // type inference enabled
    /*props: {
        name: String ,
        msg: { type: String, required: true, default:'test'}
    },*/
    data() {
        return {
            count: 1
        }
    },
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})