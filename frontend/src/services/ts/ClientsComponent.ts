import ClientsComponent from '../../components/ClientsComponent.vue'
import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'
import AccountsRepository from '../Repository/AccountsRepository'
import Group from '../model/GroupModel';
import Customer from '../model/CustomerModel';
import UpdateMoneyModalComponent from '../../components/UpdateMoneyModalComponent.vue'
import SimpleModalComponent from '../../components/SimpleModalComponent.vue'
import GroupModalComponent from '../../components/GroupModalComponent.vue'


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ClientsComponent,
        ClientModalComponent,
        UpdateMoneyModalComponent,
        SimpleModalComponent,
        GroupModalComponent
    },
    // type inference enabled
    props: {
    },
    data() {
        const groupToDisplay = "DI5";
        const accounts: Group[] = [];
        const accountsToDisplay: Customer[] = [];
        let customerMoney: Customer | undefined;
        let isCustomer: Customer | undefined;
        let message: String | undefined;
        let buttons: Number | undefined;
        let del: Boolean | undefined;
        let type: String | undefined;
        let objet : any;
        return {
            groupToDisplay,
            accounts,
            accountsToDisplay,
            isCustomer,
            customerMoney,
            message,
            buttons,
            del,
            type,
            objet
        }

    },
    methods: {
        showAddModal(customer?: Customer) {
            this.isCustomer = customer;
            const modal = document.getElementById("compteModal");
            if (modal) modal.style.display = "block";

        },
        showGroupModal(){
            const modal = document.getElementById("groupModal");
            if (modal) modal.style.display = "block";
        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        updateSolde(customer: Customer) {
            this.customerMoney = customer;
            const modal = document.getElementById("updateMoney");
            if (modal) modal.style.display = "block";
        },
        updateAccount(customer: Customer) {
            console.log("cc")
            this.accountsToDisplay.forEach((account: Customer) => {
                if (account.id === customer.id) {
                    account.money = customer.money;
                }
            })
        },
        deleteCompte(objet: Customer) {
            this.message = "Voulez-vous vraiment supprimer le compte " + objet.name + " " + objet.firstname +" ?";
            this.type = "account";
            this.buttons = 2;
            this.del = true;
            this.objet = objet;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
        },
        deleteGroup(objet: Group) {
            this.message = "Voulez-vous vraiment supprimer le groupe " + objet.name + " ?";
            this.type = "group";
            this.buttons = 2;
            this.del = true;
            this.objet = objet;
            const modal = document.getElementById("simple-modal");
            if (modal !== null) {
                modal.style.display = "block";
            }
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