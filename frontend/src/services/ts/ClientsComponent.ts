import ClientsComponent from '../../components/ClientsComponent.vue'
import ClientModalComponent from '../../components/ClientModalComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/comptes.css'


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
        const value = "DI5";
        return {
            value,
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
        updateSolde(){

        },
        addCompte(){

        },
        editCompte(){

        },
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})