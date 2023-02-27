import MenuComponent from '../../components/MenuComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/menu.css'
import { useRouter } from 'vue-router'
const router = useRouter()

function showPopUpRole(): void{
    console.log("test")
}

//@ts-ignore
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
    methods:{
        showPopUpRole: function (){
            showPopUpRole()
        },
        }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})
