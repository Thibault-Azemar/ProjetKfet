import { defineComponent } from "vue";
import UpdateMoneyModalComponent from "../../components/UpdateMoneyModalComponent.vue";
import Customer from "@/services/model/CustomerModel";
import AccountsRepository from "../Repository/AccountsRepository";


// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        UpdateMoneyModalComponent
    },
    props: {
        customer: {
            type: Customer,
            require: true
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        plus(id: string) {
            const input = document.getElementById(id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            value++
            input.value = String(value)
        },
        minus(id: string) {
            const input = document.getElementById(id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            value--
            input.value = String(value)
        },
        updateMoney(customerId: string) {
            const input = document.getElementById("money") as HTMLInputElement
            if (!input) return;
            const money = +input.value
            let oldmoney: number
            if (this.customer) {
                oldmoney = this.customer.money
            } else {
                oldmoney = 0
            }
            const newmoney = oldmoney + money
            const AccountRepo = new AccountsRepository();
            AccountRepo.updateSolde(customerId, newmoney).catch((customer: Customer) => {
                this.$emit("updateAccount", customer)
                this.unshowModal("updateMoney")
            }
            )
        }

    }

})