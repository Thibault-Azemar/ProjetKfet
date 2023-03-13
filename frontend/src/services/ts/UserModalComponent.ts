import UserModalComponent from "../../components/UserModalComponent.vue"
import User from "../Crontroller/UserController"
import {defineComponent} from 'vue'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        UserModalComponent
    },
    // type inference enabled
    props: {
        user: {
            type : User,
            require : false
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal:string) {
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display = "none";
        }
    }

    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})