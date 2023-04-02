import { defineComponent } from 'vue'
import CategoryModalComponent from '../../components/CategoryModalComponent.vue'
import Category from "@/services/model/CategoryModel";
import StockComponent from './StockComponent';
import StockRepository from '../Repository/StockRepository';

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
            const modal = document.getElementById(idModal);
            if (modal) {
                modal.style.display = "none";
            }
        },
        editCat(category: Category) {
            const StockRepo = new StockRepository();
            const name = document.getElementById("nameCategory") as HTMLInputElement;
            StockRepo.editCategory(category.id, name.value).then((response) => {
                this.$emit('editCategory', category);
                this.unshowModal('categoryModal');

            }
            ).catch((error) => {
                console.log(error);
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
                console.log(error);
            }
            )
        },
        deleteCategory(objet: Category) {
            const message = "Voulez-vous vraiment supprimer la category " + objet.name + " ?";
            const type = "category";
            this.$emit('deleteObjet', objet, message, type);
        }
    }
})