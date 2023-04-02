
import { defineComponent } from "vue";
import ClientNameModalComponent from "../../components/ClientNameModalComponent.vue";
import Commande from "../Controller/CommandeController";
import Customer from "../model/CustomerModel";
import Group from "../model/GroupModel";
import AccountsRepository from "../Repository/AccountsRepository";
import CommandesRepository from "../Repository/CommandesRepository";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ClientNameModalComponent,
    },
    // type inference enabled
    props: {
        command: Commande as any,
        payementType: {
            type: String,
            required: true
        },
    },
    data() {
        const accounts: Group[] = []
        const accountsToDisplay: Customer[] = [];
        const selectedAccount: string = ""
        return {
            accounts,
            groupToDisplay: "DI4",
            accountsToDisplay,
            selectedAccount,
        }
    },
    methods: {
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        sendCommande() {
            const paymentMethod = document.getElementById("paymentMethod") as HTMLInputElement;
            const name = document.getElementById("clientName") as HTMLInputElement;
            if (paymentMethod.value != "Account") {
                const CommandRepo = new CommandesRepository
                CommandRepo.addCommande(this.$props.command, paymentMethod.value, name.value).then((commande: Commande) => {
                    this.unshowModal("payementModal");
                    this.unshowModal("clientNameModal");
                    this.$emit("commande-added", commande);
                }).catch((error: any) => {
                    console.log(error);
                })

            }
            else {
                const CommandRepo = new CommandesRepository
                const kfet: boolean = this.groupToDisplay === "Kfet"
                CommandRepo.addCommande(this.$props.command, paymentMethod.value, this.selectedAccount, kfet).then((commande: Commande) => {
                    this.unshowModal("payementModal");
                    this.unshowModal("clientNameModal");
                    this.$emit("commande-added", commande);
                }).catch((error: any) => {
                    console.log(error);
                })
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
    },
    mounted() {
        this.getCustomers().then(() => {
            this.changeGroup(true);
        })
    },
})