import { defineComponent } from 'vue'
import CategoryModalComponent from '../../components/CategoryModalComponent.vue'
import Category from "@/services/model/CategoryModel";
import StockComponent from './StockComponent';
import StockRepository from '../Repository/StockRepository';
import Subcategory from '../model/SubcategoryModel';

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        CategoryModalComponent
    },
    props: {
        category: {
            type: Category,
            required: false
        }
    },
    data() {

    },
    methods: {
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        editCat(category: Category) {
            const StockRepo = new StockRepository();
            const name = document.getElementById("nameCategory") as HTMLInputElement;
            StockRepo.editCategory(category.id, name.value).then((response) => {
                this.$emit('editCategory', category);
                this.unshowModal('categoryModal');

            }
            ).catch((error) => {
                alert(error)
            }
            )

        },
        addCat() {
            const StockRepo = new StockRepository();
            const name = document.getElementById("nameCategory") as HTMLInputElement;
            StockRepo.addCategory(name.value).then((response) => {
                this.$emit('addCategory', this.category);
                this.unshowModal('categoryModal');

            }
            ).catch((error) => {
                alert(error)
            }
            )
        },
        deleteCategory(objet: Category) {
            console.log('cc')
            const message = "Voulez-vous vraiment supprimer la category " + objet.name + " ?";
            const type = "category";
            this.$emit('delete-category', objet, message, type);
        },
        deleteSubcategory(objet: Subcategory) {
            console.log('cc')
            const message = "Voulez-vous vraiment supprimer la sous category " + objet.name + " ?";
            const type = "subcategory";
            this.$emit('delete-subcategory', objet, message, type);
        }
    }
})