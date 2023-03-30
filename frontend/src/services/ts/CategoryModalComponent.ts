import { defineComponent } from 'vue'
import CategoryModalComponent from '../../components/CategoryModalComponent.vue'
import Category from "@/services/model/CategoryModel";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components:{
        CategoryModalComponent
    },
    props: {
        category:{
            type: Category,
            required: false
        }
    },
    data() {

    },
    methods:{
        unshowModal(idModal: string){
            const modal = document.getElementById(idModal);
            if(modal){
                modal.style.display = "none";
            }
        },
        editCat(){

        },
        addCat(){

        },
        deleteCategory(objet: Category){
            const message = "Voulez-vous vraiment supprimer la category " + objet.name + " ?";
            const type = "category";
            this.$emit('deleteObjet', objet, message, type );
        }
    }
})