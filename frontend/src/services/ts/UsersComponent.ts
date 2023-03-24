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
        let popUpMessage: String | undefined;
        let popUpButtons: Number | undefined;
        let popUpDelete: Boolean | undefined;
        const users: User[] = [];
        return {
            popUpMessage,
            popUpButtons,
            popUpDelete,
            users
        }
    },
    methods: {
        updateFromModal(popUpMessage: String, popUpButtons: Number, popUpDelete: Boolean) {
            this.popUpMessage = popUpMessage;
            this.popUpButtons = popUpButtons;
            this.popUpDelete = popUpDelete;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
        },
        deleteUser(id: string, firstname: string, name: string) {
            this.popUpMessage = "Voulez vous supprimer " + firstname + " " + name + " ?";
            this.popUpButtons = 2;
            this.popUpDelete = true;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
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
        // if (this.$root !== null) {
        //     this.$root.$on('messageFromModal', (popUpMessage: String, popUpButtons: Number, popUpDelete: Boolean) => {
        //         this.updateFromModal(popUpMessage, popUpButtons, popUpDelete);
        //     }
        //     )
        // }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})