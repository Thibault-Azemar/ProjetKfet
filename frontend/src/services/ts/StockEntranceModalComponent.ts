import { defineComponent } from 'vue'
import StockEntranceModalComponent from "../../components/StockEntranceModalComponent.vue";
import Category from '../model/CategoryModel';
import Product from '../model/ProductModel';
import Subcategory from '../model/SubcategoryModel';
import StockRepository from '../Repository/StockRepository';

// @ts-ignore
// @ts-ignore
export default defineComponent({
    components: {
        StockEntranceModalComponent
    },
    props: {
        categories: {
            type: Array,
            required: true
        }
    },
    data() {
        const subcategories: Subcategory[] = []
        return {
            subcategories
        }
    },
    methods: {
        stockEntrence() {

        },
        unshowModal(idModal: string) {
            const modal = document.getElementById(idModal);
            if (modal != null) {
                modal.style.display = "none";
            }
        },
        plus(id: string) {
            const input = document.getElementById('input' + id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            value++
            input.value = String(value)
        },
        minus(id: string) {
            const input = document.getElementById('input' + id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            value--
            input.value = String(value)
        },
        stockEntrance() {
            const productToUpdate: Product[] = []
            const StockRepo = new StockRepository()
            for (let i = 0; i < this.subcategories.length; i++) {
                for (let j = 0; j < this.subcategories[i].products.length; j++) {
                    const productInput = document.getElementById('input' + this.subcategories[i].products[j].id) as HTMLInputElement
                    if (+productInput.value != 0) {
                        this.subcategories[i].products[j].stock += +productInput.value
                        StockRepo.updateStock(this.subcategories[i].products[j]).then((res) => {
                            productToUpdate.push(this.subcategories[i].products[j])
                            location.reload()
                        })
                    }
                }
            }
            this.unshowModal('stockEntranceModal')
        },
        createSubcategoriesArray() {
            const subcategories: any[] = []
            for (let i = 0; i < this.categories.length; i++) {
                const category = this.categories[i] as Category
                for (let j = 0; j < category.subcategories.length; j++) {
                    const subcategory = category.subcategories[j] as Subcategory
                    subcategories.push(subcategory)
                }
            }
            subcategories.sort()
            this.subcategories = subcategories
        }
    },
    beforeUpdate() {
        this.createSubcategoriesArray()
    }
})