import { defineComponent } from 'vue'
import CommandeListComponent from '../../components/CommandeListComponent.vue'
import Commande from "@/services/Controller/CommandeController";
import Product from "@/services/model/ProductModel";
import "../../assets/style/commandeList.css"
import CommandesRepository from '../Repository/CommandesRepository';
import Customer from '../model/CustomerModel';

//@ts-ignore
//@ts-ignore
export default defineComponent({
    components: {
        CommandeListComponent
    },
    props: {

    },
    data() {
        const commandes: Commande[] = [];
        return {
            commandes
        }
    },
    methods: {
        getCommands() {
            const CommandRepo = new CommandesRepository();
            CommandRepo.getCommandes().then((commandes) => {
                this.commandes = commandes;
                console.log(this.commandes)
            })
        },
        editCommand() {

        }
    },
    mounted() {
        this.getCommands();
    }
})