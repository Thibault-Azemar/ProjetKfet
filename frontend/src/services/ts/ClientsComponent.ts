import ClientsComponent from '../../components/ClientsComponent.vue'
import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import AccountsRepository from '../Repository/AccountsRepository'
import Group from '../model/GroupModel';
import Customers from '../model/CustomerModel';
//import OffresComponent from "../../components/OffresComponent.vue";


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        ClientsComponent,
        ClientModalComponent
    },
    // type inference enabled
    props: {
    },
    data() {
        const groupToDisplay = "DI5";
        const accounts: Group[] = [];
        const accountsToDisplay: Customers[] = [];
        return {
            groupToDisplay,
            accounts,
            accountsToDisplay
        }

    },
    methods:{
        showAddModal(){
            const modal = document.getElementById("compteModal");
            if(modal) modal.style.display = "block";

        },
        unshowModal(idModal : string){
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display = "none";
        },
        updateSolde() {

        },
        addCompte(){

        },
        editCompte(){

        },
        },
        getCustomers(): Promise<number> {
            const accountsRepo = new AccountsRepository();
            accountsRepo.getAccounts().then((accounts: Group[]) => {
                this.accounts = accounts;
                return Promise.resolve(0);
            })
                .catch(error => {
                    console.error('Error:', error);
                    return Promise.reject(error);
                }
                );
            return Promise.resolve(1);
        },
        changeGroup() {
            this.accounts.forEach((account: Group) => {
                if (account.name === this.groupToDisplay) {
                    this.accountsToDisplay = account.customers;
                }
            })
        }
    },
    mounted() {
        this.getCustomers().then((response: number) => {
            if (response === 0) {
                this.changeGroup();
            }
            else {
                setTimeout(() => {
                    this.changeGroup();
                }, 100)
            }
        })
    }
})
