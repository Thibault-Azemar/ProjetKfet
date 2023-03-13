import UserModalComponent from "../../components/UserModalComponent.vue"
import User from "../Crontroller/UserController"
import {defineComponent} from 'vue'
import UserRepository from '../Repository/UserRepository'


// @ts-ignore
// @ts-ignore
export default defineComponent({

        components: {
            UserModalComponent,
        },
        // type inference enabled
        props: {
            user: {
                type: User,
                require: false
            }
        },
        data() {

        },
        methods: {
            addUser() {
                const name = (document.getElementById("nom-user") as HTMLInputElement).value;
                const firstname = (document.getElementById("prenom-user") as HTMLInputElement).value;
                const email = (document.getElementById("email-user") as HTMLInputElement).value;
                const password = (document.getElementById("password-user") as HTMLInputElement).value;
                const role = (document.getElementById("role-user") as HTMLInputElement).value;
                const userRepo = new UserRepository();
                if (email.search(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
                    console.log("email not valid")
                    console.log(this.$emit('messageFromModal', "L'email n'est pas valide", 1, false))
                    if (this.$root !== null) {
                        this.$root.$emit('messageFromModal', "L'email n'est pas valide", 1, false);
                    }
                } else {
                    userRepo.addUser(name, firstname, email, password, role).then(() => {
                        console.log("user added")
                    })
                }
            },
            editUser(user : User){

            },
            unshowModal(idModal: string) {
                this.$emit('unshowModal',idModal);
            }
        }
    }

    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

)