import {defineComponent} from "vue";
import UpdateMoneyModalComponent from "../../components/UpdateMoneyModalComponent.vue";
import Customer from "@/services/model/CustomerModel";


// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        UpdateMoneyModalComponent
    },
    props: {
        customer:{
            type: Customer,
            require: true
        }
    },
    data() {

    },
    methods:{
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        plus(id : string) {
            const input = document.getElementById(id) as HTMLInputElement
            if(!input)return;
            let value : number = parseInt(input.value)
            value++
            input.value = String(value)
        },
        minus(id : string) {
            const input = document.getElementById(id) as HTMLInputElement
            if(!input)return;
            let value : number = parseInt(input.value)
            if(value === 0) return;
            value--
            input.value = String(value)
        },
        updateMoney(customerId : string){
            const input = document.getElementById("money") as HTMLInputElement
            if(!input)return;
            const value : number = parseInt(input.value)
            //fonction a terminer
        }

    }

})