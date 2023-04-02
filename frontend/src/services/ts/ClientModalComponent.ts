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
            });
        },
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        addCompte() {
            const name = (document.getElementById("nom-compte") as HTMLInputElement).value;
            const firstname = (document.getElementById("prenom-compte") as HTMLInputElement).value;
            const group = (document.getElementById("groupe") as HTMLInputElement).value;
            const accountsRepo = new AccountsRepository();
            accountsRepo.addAccount(name, firstname, 0, group).then((customer: Customer) => {
                //location.reload();
            });
        },
        editCompte(customer: Customer) {
            const name = (document.getElementById("nom-compte") as HTMLInputElement).value;
            const firstname = (document.getElementById("prenom-compte") as HTMLInputElement).value;
            const group = (document.getElementById("groupe") as HTMLInputElement).value;
            const accountsRepo = new AccountsRepository();
            accountsRepo.updateAccount(customer.id, name, firstname, customer.money, group).then((response) => {
                //location.reload();
            }
            );

        }
    },
    beforeMount() {
        this.getGroups();
    },

})