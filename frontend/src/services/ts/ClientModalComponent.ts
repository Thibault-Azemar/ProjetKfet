import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import Customer from "../model/CustomerModel"
import Group from '../model/GroupModel'
import AccountsRepository from '../Repository/AccountsRepository'


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ClientModalComponent,
    },
    props: {
        customer: {
            type: Customer,
            require: false
        }
    },
    data() {
        const groups: Group[] = []
            ;
        return {
            groups
        }
    },
    methods: {
        getGroups() {
            const accountsRepo = new AccountsRepository();
            accountsRepo.getGroups().then((groups: Group[]) => {
                this.groups = groups;
                console.log(this.groups)
            });
        },
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        addCompte() {
            const accountsRepo = new AccountsRepository();
            accountsRepo.addAccount("test", "test", 100, "DI5").then((customer: Customer) => {
                //location.reload();
            });
        },
        editCompte() {

        }
    },
    beforeMount() {
        this.getGroups();
    },

})