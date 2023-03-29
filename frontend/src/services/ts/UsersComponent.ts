import UsersComponent from '../../components/UsersComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/users.css'
import User from '../Controller/UserController'
import UserRepository from '../Repository/UserRepository'
import SimpleModalComponent from "../../components/SimpleModalComponent.vue";
// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        UsersComponent,
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {
        const users: User[] = [];
        return {
            users,

        }
    },
    methods: {
        deleteUser(objet: User) {
            const message = "Voulez-vous vraiment supprimer l'utilisateur " + objet.name +" " + objet.firstname + " ?";
            const type = "user";
            this.$emit('deleteObjet', objet, message, type );
        },
        getUsers(): User[] {
            const userRepo = new UserRepository();
            userRepo.getUsers().then((users: User[]) => {
                this.users = users;
            });
            return this.users;
        },
        updateUser(user: User) {
            this.$emit('updateUser', user)

        },
        showModal(user?: User): void {
            this.$emit('showAddModal', user);

        },
    },
    beforeMount() {
        this.getUsers();
    },
    mounted() {

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})