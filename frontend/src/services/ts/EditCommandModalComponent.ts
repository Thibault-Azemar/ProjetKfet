import { defineComponent } from 'vue'
import EditCommandModalComponent from '../../components/EditCommandModalComponent.vue'
import Commande from "@/services/Controller/CommandeController";
import Product from '../model/ProductModel';
import CommandesRepository from '../Repository/CommandesRepository';

// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        EditCommandModalComponent
    },
    props: {
        commande: {
            type: Commande,
            required: true
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        editProductState(id: string, product: Product, event: any) {
            const state = event.target.value;
            const commandesRepo = new CommandesRepository();
            commandesRepo.editProductState(id, product.id, state).then((response: any) => {
                if (response.status === 200) {
                    product.setState(state);
                }
            })
                ;


        }
    }
})