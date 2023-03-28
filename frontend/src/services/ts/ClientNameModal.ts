
import { defineComponent } from "vue";
import ClientNameModalComponent from "../../components/ClientNameModalComponent.vue";
import Commande from "../Controller/CommandeController";
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

    },
    methods: {
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        sendCommande() {
            console.log(this.$props.command)
            const paymentMethod = document.getElementById("paymentMethod") as HTMLInputElement;
            const name = document.getElementById("clientName") as HTMLInputElement;
            if (name != null) {
                const CommandRepo = new CommandesRepository
                CommandRepo.addCommande(this.$props.command, paymentMethod.value, name.value).then((commande: Commande) => {
                    this.unshowModal("payementModal");
                    this.unshowModal("clientNameModal");
                    this.$emit("commandeAdded", commande);
                }).catch((error: any) => {
                    console.log(error);
                })

            }
            else {
                const CommandRepo = new CommandesRepository
                CommandRepo.addCommande(this.$props.command, paymentMethod.value).then((commande: Commande) => {
                    this.unshowModal("payementModal");
                    this.unshowModal("clientNameModal");
                    this.$emit("commandeAdded", commande);
                }).catch((error: any) => {
                    console.log(error);
                })
            }
        },
    },
    mounted() {

    },
})