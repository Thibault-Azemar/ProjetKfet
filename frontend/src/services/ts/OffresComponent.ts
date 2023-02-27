import OffresComponent from '../../components/OffresComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/offres.css'
import SimpleModalComponent from "../../components/SimpleModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        OffresComponent,
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {
        let popUpMessage: String | undefined;
        let popUpButtons: Number | undefined;
        let popUpDelete: Boolean | undefined;
        return{
            popUpMessage,
            popUpButtons,
            popUpDelete
        }
    },
    methods:{
        showPopUpDelete(/*mettre id de l'offre*/ del:boolean, buttons:number){
            this.popUpMessage = "Voulez vous supprimer ça ?";
            this.popUpButtons = buttons;
            this.popUpDelete = del;
            const modal = document.getElementById("simple-modal");
            if(modal !== null){
                modal.style.display="block";
            }
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})