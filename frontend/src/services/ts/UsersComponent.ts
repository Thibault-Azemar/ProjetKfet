import UsersComponent from '../../components/UsersComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/users.css'
import User from '../Crontroller/UserController'
import UserRepository from '../Repository/UserRepository'

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
        const users: User[] = this.getUsers();
        return {
            users
        }
    },
    methods: {
        getUsers(): void {
            const userRepo = new UserRepository();
            userRepo.getUsers().then((users: User[]) => {
                this.users = users;
            });
        }

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})