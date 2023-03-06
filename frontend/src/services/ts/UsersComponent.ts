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
        const users: User[] = [];
        return {
            users
        }
    },
    methods: {
        getUsers(): User[] {
            const userRepo = new UserRepository();
            userRepo.getUsers().then((users: User[]) => {
                this.users = users;
            });
            return this.users;
        }

    },
    beforeMount() {
        this.getUsers();
    }

})