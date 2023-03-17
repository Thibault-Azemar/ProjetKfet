import StockComponent from '../../components/StockComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/stock.css'
import Category from '../model/CategoryModel';
import StockRepository from '../Repository/StockRepository'
import Product from "@/services/model/ProductModel";
import User from "@/services/Crontroller/UserController";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        StockComponent
    },
    // type inference enabled
    props: {
        //mettre la liste d'objet
    },
    data() {
        const stock: Category[] = [];
        return {
            stock
        }
    },
    methods: {
        showModalProduit() {

        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) modal.style.display = "none";
        },
        getStocks(): Category[] {
            const stockRepo = new StockRepository();
            stockRepo.getStocks().then((stock: Category[]) => {
                this.stock = stock;
            });

            return this.stock;
        },
        deleteProduct(product: Product) {
            const stockRepo = new StockRepository();
            stockRepo.deleteProduct(product).then(() => {
                this.getStocks();
            });
            this.getStocks();
        },
        updateProduct(produit: Product) {
            this.$emit('updateProduct', produit)

        }


    },
    beforeMount() {
        this.getStocks();
    },
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})