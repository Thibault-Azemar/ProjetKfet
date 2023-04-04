import { defineComponent } from "vue";
import OffreModalComponent from "@/components/OffreModalComponent.vue";
import "../../assets/style/offre-modal.css";
import Offer from '../Controller/OfferController';
import StockRepository from "../Repository/StockRepository";
import Category from "../model/CategoryModel";
import OfferRepository from "../Repository/OfferRepository";
import Subcategory from "../model/SubcategoryModel";
import Product from "../model/ProductModel";


// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        OffreModalComponent,
    },
    props: {
        categories: {
            type: Array as () => Category[],
            required: true
        },
        offer: {
            type: Offer,
            required: false
        }
    },
    data() {
        return {
            cats: this.categories,
        }
    },
    methods: {
        unshowModal(idModal: string) {
            this.$emit('unshowModal', idModal);
        },
        plus(id: string) {
            const input = document.getElementById(id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            value++
            input.value = String(value)
        },
        minus(id: string) {
            const input = document.getElementById(id) as HTMLInputElement
            if (!input) return;
            let value: number = parseInt(input.value)
            if (value === 0) return;
            value--
            input.value = String(value)
        },
        addOffer() {
            const offerRepo = new OfferRepository()
            const name = document.getElementById('nom-offre') as HTMLInputElement
            const price = document.getElementById('prix-offre') as HTMLInputElement
            const priceMember = document.getElementById('prix-offre-membre') as HTMLInputElement
            const image = document.getElementById('image-offre') as HTMLInputElement
            const categoriesOffer: Category[] = []
            const subcategoriesOffer: Subcategory[] = []
            const productsOffer: Product[] = []
            let nbProducts = 0
            this.categories.forEach((category) => {
                const catInput = document.getElementById(category.id) as HTMLInputElement
                if (+ catInput.value > 0) {
                    for (let i = 0; i < +catInput.value; i++) {
                        categoriesOffer.push(category)
                    }
                    nbProducts += +catInput.value
                    category.subcategories.forEach((subcategory) => {
                        const subcatInput = document.getElementById(subcategory.id) as HTMLInputElement
                        if (+subcatInput.value > 0) {
                            for (let i = 0; i < +subcatInput.value; i++) {
                                subcategoriesOffer.push(subcategory)
                            }
                            nbProducts += +subcatInput.value
                            subcategory.products.forEach((product) => {
                                const prodInput = document.getElementById(product.id) as HTMLInputElement
                                if (+prodInput.value > 0) {
                                    for (let i = 0; i < +prodInput.value; i++) {
                                        productsOffer.push(product)
                                    }
                                    nbProducts += +prodInput.value
                                }
                            })
                        }
                    })
                }
            })
            offerRepo.addOffer(name.value, +price.value, +priceMember.value, nbProducts, image.value).then((response) => {
                const commandId = response
                categoriesOffer.forEach((category) => {
                    offerRepo.addCategoryToOffer(commandId, category.id).then((response) => {
                    })
                })
                subcategoriesOffer.forEach((subcategory) => {
                    offerRepo.addSubCategoryToOffer(commandId, subcategory.id).then((response) => {
                    })
                })
                productsOffer.forEach((product) => {
                    offerRepo.addProductToOffer(commandId, product.id).then((response) => {
                    })
                })
                const nameProducts: string[] = []
                const catIds: string[] = []
                const subcatIds: string[] = []
                const prodIds: string[] = []
                categoriesOffer.forEach((category) => {
                    nameProducts.push(category.name)
                    catIds.push(category.id)
                })
                subcategoriesOffer.forEach((subcategory) => {
                    nameProducts.push(subcategory.name)
                    subcatIds.push(subcategory.id)
                })
                productsOffer.forEach((product) => {
                    nameProducts.push(product.name)
                    prodIds.push(product.id)
                })
                const description = nbProducts + " produits parmis : " + nameProducts.join(", ")
                const offer = new Offer(commandId, name.value, +price.value, +priceMember.value, description, nbProducts, prodIds, subcatIds, catIds, image.value)
                this.$emit("offerAdded", offer)
            }
            )
        },
        updateOffer(offer: Offer) {
            console.log(offer)
            const offerRepo = new OfferRepository()
            const name = document.getElementById('nom-offre') as HTMLInputElement
            const price = document.getElementById('prix-offre') as HTMLInputElement
            const priceMember = document.getElementById('prix-offre-membre') as HTMLInputElement
            const image = document.getElementById('image-offre') as HTMLInputElement
            const categoriesOffer: Category[] = []
            const subcategoriesOffer: Subcategory[] = []
            const productsOffer: Product[] = []
            let nbProducts = 0
            this.categories.forEach((category) => {
                const catInput = document.getElementById(category.id) as HTMLInputElement
                if (+ catInput.value > 0) {
                    for (let i = 0; i < +catInput.value; i++) {
                        categoriesOffer.push(category)
                    }
                    nbProducts += +catInput.value
                    category.subcategories.forEach((subcategory) => {
                        const subcatInput = document.getElementById(subcategory.id) as HTMLInputElement
                        if (+subcatInput.value > 0) {
                            for (let i = 0; i < +subcatInput.value; i++) {
                                subcategoriesOffer.push(subcategory)
                            }
                            nbProducts += +subcatInput.value
                            subcategory.products.forEach((product) => {
                                const prodInput = document.getElementById(product.id) as HTMLInputElement
                                if (+prodInput.value > 0) {
                                    for (let i = 0; i < +prodInput.value; i++) {
                                        productsOffer.push(product)
                                    }
                                    nbProducts += +prodInput.value
                                }
                            })
                        }
                    })
                }
            })
            offerRepo.editOffer(offer.id, name.value, +price.value, +priceMember.value, nbProducts).then((response) => {
                categoriesOffer.forEach((category) => {
                    offerRepo.addCategoryToOffer(offer.id, category.id).then((response) => {
                    })
                })
                subcategoriesOffer.forEach((subcategory) => {
                    offerRepo.addSubCategoryToOffer(offer.id, subcategory.id).then((response) => {
                    })
                })
                productsOffer.forEach((product) => {
                    offerRepo.addProductToOffer(offer.id, product.id).then((response) => {
                    })
                })
                const nameProducts: string[] = []
                const catIds: string[] = []
                const subcatIds: string[] = []
                const prodIds: string[] = []
                categoriesOffer.forEach((category) => {
                    nameProducts.push(category.name)
                    catIds.push(category.id)
                })
                subcategoriesOffer.forEach((subcategory) => {
                    nameProducts.push(subcategory.name)
                    subcatIds.push(subcategory.id)
                })
                productsOffer.forEach((product) => {
                    nameProducts.push(product.name)
                    prodIds.push(product.id)
                })
                const description = nbProducts + " produits parmis : " + nameProducts.join(", ")
                this.$emit("offerUpdated", offer)
            }
            )
        },
        countOccurences(array: { key: string, value: number }[], id: string) {
            let count = 0;
            if (array)
                array.forEach((element) => {
                    if (element.key === id) {
                        count = element.value
                    }
                })
            return count
        }
    },
    mounted() {
    },


})