import MenuComponent from '../../components/MenuComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/menu.css'
import { useRouter } from 'vue-router'
import AccountModalComponent from '../../components/AccountModalComponent.vue'
const router = useRouter()

function showPopUpRole(): void{
    console.log("test")
}

//@ts-ignore
export default defineComponent({

    components:{
        MenuComponent,
        AccountModalComponent
    },
    // type inference enabled
    /*props: {
        name: String ,
        msg: { type: String, required: true, default:'test'}
    },*/
    data() {
        const isAccountModalShow : boolean = false
        return {
            isAccountModalShow
        }
    },
    methods:{
        showAccountModal (){
            const modal = document.getElementById("account-popup") as HTMLElement
            if(!this.isAccountModalShow) {
                this.isAccountModalShow = true;
                if(modal) modal.style.display = "block";
            }
            else {
                this.isAccountModalShow = false;
                if(modal) modal.style.display = "none";
            }
        },
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})
