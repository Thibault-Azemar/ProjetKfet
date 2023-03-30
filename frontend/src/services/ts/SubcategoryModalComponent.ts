
import { defineComponent } from 'vue'
import SubcategoryModalComponent from '../../components/SubcategoryModalComponent.vue'
import Category from "@/services/model/CategoryModel";
import Subcategory from "@/services/model/SubcategoryModel";

// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        SubcategoryModalComponent
    },
    props: {
        category:{
            type: Category,
            required: true
        }
    },
    data() {
        let isSubCat: Subcategory | undefined;
        return {
            isSubCat
        }
    },
    methods: {
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal) {
                modal.style.display = "none";
            }
        },
        showEditModal(sscategory?: Subcategory){
            this.isSubCat = sscategory;
            const modal = document.getElementById("sscatEditModal");
            if (modal) {
                modal.style.display = "block";
            }
        },
        deleteSubcategory(objet:Subcategory){
            const message = "Voulez-vous vraiment supprimer la sous category " + objet.name + " ?";
            const type = "subcategory";
            this.$emit('deleteObjet', objet, message, type );
        },
        editSscat(sscategory:Subcategory){

        },
        addSscat(){

        }


    }
})