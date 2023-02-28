import StockComponent from '../../components/StockComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/stock.css'

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        StockComponent
    },
    // type inference enabled
    props: {
        //mettre la liste d'objet
    },
    data() {
    },
    methods:{
        showModalProduit(){

        },
        unshowModal(idModal:string){
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display="none";
        }

    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})