import { defineComponent } from 'vue'
import StockEntranceModalComponent from "../../components/StockEntranceModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        StockEntranceModalComponent
    },
    props: {

    },
    data() {

    },
    methods: {
        stockEntrence(){

        },
        unshowModal(idModal: string){
            const modal = document.getElementById(idModal);
            if (modal != null) {
                modal.style.display = "none";
            }
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
            if (value === 0) return;
            value--
            input.value = String(value)
        },
        stockEntrance(){

        }
    }
})