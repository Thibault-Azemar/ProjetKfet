import ProduitModalComponent from "../../components/ProduitModalComponent.vue"
import Produit from "../model/ProductModel"
import { defineComponent } from 'vue'
import StockRepository from '../Repository/StockRepository'
import Subcategory from '../model/SubcategoryModel';
import Product from "../model/ProductModel";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        ProduitModalComponent
    },
    // type inference enabled
    props: {
        produit: {
            type: Produit,
            require: false
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
            this.$emit('unshowModal', idModal);
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
            const imageInput = (document.getElementById("image-produit") as HTMLInputElement);
            let image: File = new File([""], "default.png");
            if (imageInput.files != null) {
                image = imageInput.files[0]
            }
            //convert to base64
            const reader = new FileReader();
            let imageb64 = "";
            if (image != null) {
                reader.readAsDataURL(image);
                reader.onload = () => {
                    imageb64 = reader.result as string;
                };
                reader.onerror = (error) => {
                    alert("Error: " + error)
                };
            }
            const stockRepo = new StockRepository();
            const productToAdd = new Product("", name, +buyPrice, +sellPrice, +sellPriceMember, 0, subcategory, imageb64);
            stockRepo.addProduct(name, +buyPrice, +sellPrice, +sellPriceMember, subcategory, imageb64).then((response: any) => {
                //this.$emit('productAdded', productToAdd);
                location.reload();
            });

        },
        editProduct(produit: Produit) {
            const id = produit.id;
            const name = (document.getElementById("nom-produit") as HTMLInputElement).value;
            const buyPrice = (document.getElementById("prix-achat") as HTMLInputElement).value;
            const sellPrice = (document.getElementById("prix-vente") as HTMLInputElement).value;
            const sellPriceMember = (document.getElementById("prix-vente-member") as HTMLInputElement).value;
            const subcategory = (document.getElementById("sous-cat") as HTMLInputElement).value;
            let image = (document.getElementById("image-produit") as HTMLInputElement).value;
            if (image == "")
                image = "";
            produit.name = name;
            produit.purchasePrice = +buyPrice;
            produit.sellingPrice = +sellPrice;
            produit.sellingPriceMembers = +sellPriceMember;
            produit.subcategory = subcategory;
            if (image != "")
                produit.image = image;

            const stockRepo = new StockRepository();
            stockRepo.editProduct(id, name, +buyPrice, +sellPrice, +sellPriceMember, subcategory, image).then((response: any) => {
                //this.unshowModal("produitModal");
                location.reload();
            });
        },
    },

    mounted() {

        this.getSubcategories();
    },

})