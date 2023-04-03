import { defineComponent } from "vue";
import SimpleModalComponent from "@/components/SimpleModalComponent.vue";
import StockRepository from "../Repository/StockRepository";
import OfferRepository from "../Repository/OfferRepository";
import UserRepository from "../Repository/UserRepository";
import AccountsRepository from "../Repository/AccountsRepository";

// @ts-ignore
// @ts-ignore
export default defineComponent({

    components: {
        SimpleModalComponent
    },
    // type inference enabled
    props: {
        buttons: {
            type: Number,
            require: true
        },
        message: {
            type: String,
            require: true
        },
        del: {
            type: Boolean,
            value: false
        },
        objet: {
            type: Object,
            require: true
        },
        type: {
            type: String,
            require: true
        }
    },
    data() {
        return {}
    },
    methods: {
        unshowModal(popUpId: string) {
            const modal = document.getElementById(popUpId);
            if (modal) modal.style.display = "none";
        },
        deleteObjet() {
            console.log(this.type)
            switch (this.type) {
                case "product":
                    // eslint-disable-next-line no-case-declarations
                    const productRepo = new StockRepository();
                    if (this.objet)
                        productRepo.deleteProduct(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteProduct", this.objet.id);
                        });
                    break;
                case "offer":
                    // eslint-disable-next-line no-case-declarations
                    const offerRepo = new OfferRepository();
                    if (this.objet)
                        offerRepo.deleteOffer(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteOffer", this.objet.id);
                        });
                    break;
                case "user":
                    // eslint-disable-next-line no-case-declarations
                    const userRepo = new UserRepository();
                    if (this.objet)
                        userRepo.deleteUser(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteUser", this.objet.id);
                        });
                    break;
                case "account":
                    // eslint-disable-next-line no-case-declarations
                    const accountRepo = new AccountsRepository();
                    if (this.objet)
                        accountRepo.deleteAccount(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteAccount", this.objet.id);
                            location.reload();
                        });
                    break;
                case "group":
                    // eslint-disable-next-line no-case-declarations
                    const groupRepo = new AccountsRepository();
                    if (this.objet)
                        groupRepo.deleteGroup(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteGroup", this.objet.id);
                            location.reload();
                        });
                    break;
                case "category":
                    // eslint-disable-next-line no-case-declarations
                    const categoryRepo = new StockRepository();
                    if (this.objet)
                        categoryRepo.deleteCategory(this.objet.id).then(() => {
                            if (this.objet)
                                this.$emit("deleteCategory", this.objet.id);
                        });
                    break;
                case "subcategory":
                    // eslint-disable-next-line no-case-declarations
                    const subcategoryRepo = new StockRepository();
                    if (this.objet)
                        subcategoryRepo
                            .deleteSubcategory(this.objet.id)
                            .then(() => {
                                if (this.objet)
                                    this.$emit("deleteSubcategory", this.objet.id);
                            });
                    break;
            }
        }
        /*mounted() {
            this.name // type: string | undefined
            this.msg // type: string
            this.count // type: number
        }*/
    }
})
