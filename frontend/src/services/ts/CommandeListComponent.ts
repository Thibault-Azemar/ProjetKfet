import { defineComponent } from 'vue'
import CommandeListComponent from '../../components/CommandeListComponent.vue'
import Commande from "@/services/Controller/CommandeController";
import "../../assets/style/commandeList.css"
import CommandesRepository from '../Repository/CommandesRepository';
import EditCommandModalComponent from '../../components/EditCommandModalComponent.vue'

//@ts-ignore
//@ts-ignore
export default defineComponent({
    components: {
        CommandeListComponent,
        EditCommandModalComponent
    },
    props: {

    },
    data() {
        const commandes: Commande[] = [];
        let isCommande: Commande | undefined;
        return {
            commandes,
            isCommande
        }
    },
    methods: {
        getCommands() {
            const CommandRepo = new CommandesRepository();
            CommandRepo.getCommandes().then((commandes) => {
                this.commandes = commandes;
            })
        },
        editCommand(commande: Commande) {
            this.isCommande = commande;
            const modal = document.getElementById("editCommandModal");
            if (modal) modal.style.display = "block";
        }
    },
    mounted() {
        this.getCommands();
    }
})