import CategoriesComponent from '../../components/CategoriesComponent.vue'
import { defineComponent } from 'vue'
import '../../assets/style/categories.css'
import CategoryModalComponent from '../../components/CategoryModalComponent.vue'
import SubcategoryModalComponent from '../../components/SubcategoryModalComponent.vue'
import Category from "@/services/model/CategoryModel";
import SimpleModalComponent from "@/components/SimpleModalComponent.vue";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        CategoriesComponent,
        CategoryModalComponent,
        SubcategoryModalComponent,
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        //value: String ,
        categories: {
            type: Array as () => Category[],
            required: true
        },
    },
    data() {
        const isCategory: Category = new Category();
        let message: String | undefined;
        let buttons: Number | undefined;
        let del: Boolean | undefined;
        let type: String | undefined;
        let deleteObj: any;
        return {
            isCategory,
            message,
            buttons,
            del,
            type,
            deleteObj
        }

    },
    methods: {
        updateCategory(category: Category) {
            console.log("updateCategory")
            //ajouter category en parametre
            //this.isCategory = category;
            this.$emit('updateCategory', category);
        },
        updateSubcategory(category: Category) {
            this.isCategory = category;
            const modal = document.getElementById("subcategoryModal");
            if (modal) { modal.style.display = "block"; }
        },
        deleteObjet(objet: any, message: String, type: String) {
            this.message = message;
            this.buttons = 2;
            this.del = true;
            this.type = type;
            this.deleteObj = objet;
            const modal = document.getElementById("simpleModal");
            if (modal) {
                modal.style.display = "block";
            }
        }
    }

})