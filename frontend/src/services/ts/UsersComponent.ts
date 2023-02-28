import UsersComponent from '../../components/UsersComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/users.css'
import Users from '../Crontroller/UsersController'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        UsersComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {
        const users = new Users();
        console.log(users)
        return {
            users
        }
    },
    methods: {

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})