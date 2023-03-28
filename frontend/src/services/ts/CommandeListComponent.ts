import { defineComponent } from 'vue'
import CommandeListComponent from '../../components/CommandeListComponent.vue'
import Commande from "@/services/Controller/CommandeController";
import Product from "@/services/model/ProductModel";
import "../../assets/style/commandeList.css"

//@ts-ignore
//@ts-ignore
export default defineComponent({
    components: {
        CommandeListComponent
    },
    props: {

    },
    data() {
        const produits : Product[] = [new Product('abc','Pain',1.5,1,1,2,'test'),new Product('def','Lait',1.5,1,1,2,'test'),new Product('hij','Beurre',1.5,1,1,2,'test')]
        const commandes : Commande[] = [new Commande(new Date(),15,true,'Cb',produits,'gérard'),new Commande(new Date(),15,true,'Cb',produits, 'berthe'),new Commande(new Date(),15,true,'Cb',produits,'Harold'),new Commande(new Date(),15,true,'Cb',produits,'test')]
        return {
            commandes
        }
    },
    methods: {
        editCommand(){

        }
    }
})