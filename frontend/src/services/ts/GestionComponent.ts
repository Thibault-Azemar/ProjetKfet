import GestionComponent from '../../components/GestionComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/gestion.css'
import OffresComponent from "../../components/OffresComponent.vue";
import UsersComponent from "../../components/UsersComponent.vue";
import CategoriesComponent from "../../components/CategoriesComponent.vue";
import StockComponent from "../../components/StockComponent.vue";
import ProduitModalComponent from "../../components/ProduitModalComponents.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        GestionComponent,
        OffresComponent,
        UsersComponent,
        CategoriesComponent,
        StockComponent,
        ProduitModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
    },
    data() {
        const value = 'Stock';
        return {
            value
        }
    },
    methods:{
        showAddModal(){
            let modal;
            if(this.value === "Stock"){
                modal = document.getElementById("produitModal");
                if(modal) modal.style.display = "block";
            }
            if(this.value === "Offres"){
                modal = document.getElementById("produitOffres");
                if(modal) modal.style.display = "block";
            }
            if(this.value === "Categories"){
                modal = document.getElementById("produitCategories");
                if(modal) modal.style.display = "block";
            }
            if(this.value === "Users"){
                modal = document.getElementById("produitUsers");
                if(modal) modal.style.display = "block";
            }
        }
    }
    /*mounted() {
        this.name // type: string | undefined
        this.msg // type: string
        this.count // type: number
    }*/

})