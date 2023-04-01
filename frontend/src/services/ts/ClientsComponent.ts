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
        const groupToDisplay = "";
        const accounts: Group[] = [];
        const accountsToDisplay: Customer[] = [];
        let customerMoney: Customer | undefined;
        let isCustomer: Customer | undefined;
        let message: String | undefined;
        let buttons: Number | undefined;
        let del: Boolean | undefined;
        let type: String | undefined;
        let objet: any;
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
            objet,
        }

    },
    methods: {
        showAddModal(customer?: Customer) {
            this.isCustomer = customer;
            const modal = document.getElementById("compteModal");
            if (modal) modal.style.display = "block";

        },
        showGroupModal() {
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
            this.accountsToDisplay.forEach((account: Customer) => {
                if (account.id === customer.id) {
                    account.money = customer.money;
                }
            })
        },
        deleteCompte(objet: Customer) {
            this.message = "Voulez-vous vraiment supprimer le compte " + objet.name + " " + objet.firstname + " ?";
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
        changeGroup(init?: boolean) {
            for (let i = 0; i < this.accounts.length; i++) {
                if (i === 0 && init) {
                    this.groupToDisplay = this.accounts[i].name;
                }
                if (this.accounts[i].name === this.groupToDisplay) {
                    this.accountsToDisplay = this.accounts[i].customers;
                }
            }
        },
        deleteAccount(id: string) {
            this.unshowModal("simple-modal");
            this.accounts.forEach((account: Group) => {
                account.customers.forEach((customer: Customer) => {
                    if (customer.id === id) {
                        account.customers.splice(account.customers.indexOf(customer), 1);
                    }
                })
            })
            this.accountsToDisplay.forEach((customer: Customer) => {
                if (customer.id === id) {
                    this.accountsToDisplay.splice(this.accountsToDisplay.indexOf(customer), 1);
                }
            })
        },
        deleteGroupFromList(id: string) {
            this.unshowModal("simple-modal");
            const accountComp = this.$refs.GroupModalComponent as typeof GroupModalComponent;
            accountComp.groups.forEach((group: Group) => {
                if (group.id === id) {
                    accountComp.groups.splice(accountComp.groups.indexOf(group), 1);
                }
            })
        }
    },
    created() {
        this.getCustomers().then((response: number) => {
            if (response === 0) {
                this.changeGroup(true);
            }
            else {
                setTimeout(() => {
                    this.changeGroup(true);
                }, 100)
            }
        })
    }

})