import ProduitModalComponent from "../../components/ProduitModalComponent.vue"
import Produit from "../Crontroller/StockController"
import {defineComponent} from 'vue'
import StockRepository from '../Repository/StockRepository'
import Subcategory from '../model/SubcategoryModel';

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ProduitModalComponent
    },
    // type inference enabled
    props: {
        produit :{
            type : Produit,
            require : false
        }
    },
    data() {
        const subcategories: Subcategory[] = [];
        return {
            subcategories
        }

    },
    methods: {
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if(modal) modal.style.display = "none";
        },
        updateStock(produit:Produit){
            this.$emit('updateStock',produit);
            if (modal) modal.style.display = "none";
        },
        getSubcategories() {
            const stockRepo = new StockRepository();
            stockRepo.getSubNewProduct().then((subcategories: Subcategory[]) => {
                this.subcategories = subcategories;
            });
        },
        addProduct() {
            const name = (document.getElementById("nom-produit") as HTMLInputElement).value;
            const buyPrice = (document.getElementById("prix-achat") as HTMLInputElement).value;
            const sellPrice = (document.getElementById("prix-vente") as HTMLInputElement).value;
            const sellPriceMember = (document.getElementById("prix-vente-member") as HTMLInputElement).value;
            const subcategory = (document.getElementById("sous-cat") as HTMLInputElement).value;
            const image = (document.getElementById("image-produit") as HTMLInputElement).value;
            console.log(image)

            const stockRepo = new StockRepository();
            stockRepo.addProduct(name, +buyPrice, +sellPrice, +sellPriceMember, subcategory, image).then((response: any) => {
                console.log(response);
            });
        }
    },

    beforeMount() {
        this.getSubcategories();
    },
})