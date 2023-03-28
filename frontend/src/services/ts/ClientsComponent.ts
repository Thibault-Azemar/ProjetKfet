import ClientsComponent from '../../components/ClientsComponent.vue'
import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import AccountsRepository from '../Repository/AccountsRepository'
import Group from '../model/GroupModel';
import Customer from '../model/CustomerModel';
//import OffresComponent from "../../components/OffresComponent.vue";


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ClientsComponent,
        ClientModalComponent
    },
    // type inference enabled
    props: {
    },
    data() {
        const groupToDisplay = "DI5";
        const accounts: Group[] = [];
        const accountsToDisplay: Customer[] = [];
        let isCustomer: Customer | undefined;
        return {
            groupToDisplay,
            accounts,
            accountsToDisplay,
            isCustomer
        }

    },
    methods: {
        showAddModal(customer?: Customer) {
            console.log(customer)
            this.isCustomer = customer;
            const modal = document.getElementById("compteModal");
            if (modal) modal.style.display = "block";

        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        updateSolde() {
            const accountsRepo = new AccountsRepository();
            accountsRepo.addAccount("test", "test", 100, "DI5").then((customer: Customer) => {
                this.accounts.forEach((account: Group) => {
                    if (account.name === this.groupToDisplay) {
                        account.addCustomer(customer);
                    }
                })
                this.changeGroup();
            })

        },
        editCompte() {

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
        },
        updateCustomer(customer: Customer) {
            this.isCustomer = customer;
            this.showAddModal();

        },
    },
    beforeMount() {
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