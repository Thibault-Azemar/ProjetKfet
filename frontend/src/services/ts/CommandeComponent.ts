import { defineComponent } from "vue";
import CommandeComponent from "../../components/CommandeComponent.vue";
import '../../assets/style/commande.css'
import Category from "../model/CategoryModel";
import CommandesRepository from "../Repository/CommandesRepository";
import Subcategory from "../model/SubcategoryModel";
import Offer from "../Controller/OfferController";
import PayementModalComponent from "../../components/PayementModalComponent.vue";
import ClientNameModalComponent from "../../components/ClientNameModalComponent.vue";
import Commande from "../Controller/CommandeController";
import Product from "../model/ProductModel";

// @ts-ignore
// @ts-ignore
export default defineComponent({

  components: {
    CommandeComponent,
    PayementModalComponent,
    ClientNameModalComponent
  },
  // type inference enabled
  props: {

  },
  data() {
    //pair of title and content
    interface gridCellContent {
      id: string,
      title: string,
      image: string,
      type: string
    }
    const image: string = "../../assets/pictures/offer.jpg";
    const gridCellsContent: gridCellContent[] = [];
    const currentDisplay: string = "home";
    const command = new Commande();
    const currentCategories: Category[] = [];
    const currentSubcategories: Subcategory[] = [];
    const currentProducts: Product[] = [];
    const payementType: string = "";
    return {
      image,
      gridCellsContent,
      payementType,
      command,
      currentCategories,
      currentSubcategories,
      currentProducts,
      currentDisplay
    }

  },
  methods: {
    getCategories() {
      this.currentDisplay = "home";
      this.gridCellsContent = [];
      this.currentCategories = [];
      const image = "../../assets/pictures/offer.jpg";
      this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer" });
      const CatRepository = new CommandesRepository();
      CatRepository.getCategory().then((categories: Category[]) => {
        categories.forEach((category: Category) => {
          //add to the gridCellsContent
          const image = category.image;
          console.log(image)
          this.gridCellsContent.push({ id: category.id, title: category.name, image: image, type: "category" });
          this.currentCategories.push(category);
          console.log(this.gridCellsContent)
        });
      });
    },
    clickOnCell(type: string, id: string) {
      const CatRepository = new CommandesRepository();
      console.log(type + " " + id)
      switch (type) {
        case "category":
          this.currentDisplay = "category";
          this.gridCellsContent = [];
          this.currentSubcategories = [];
          CatRepository.getCategory().then((categories: Category[]) => {
            categories.forEach((category: Category) => {
              if (category.id == id) {
                //add to the gridCellsContent
                category.subcategories.forEach((subcategory: Subcategory) => {
                  this.gridCellsContent.push({ id: subcategory.id, title: subcategory.name, image: subcategory.image, type: "subcategory" });
                  this.currentSubcategories.push(subcategory);
                });
              }
            });
          });
          break;
        case "subcategory":
          this.currentDisplay = "subcategory";
          this.gridCellsContent = [];
          this.currentProducts = [];
          CatRepository.getCategory().then((categories: Category[]) => {
            categories.forEach((category: Category) => {
              category.subcategories.forEach((subcategory: Subcategory) => {
                if (subcategory.id == id) {
                  //add to the gridCellsContent
                  subcategory.products.forEach((product) => {
                    this.gridCellsContent.push({ id: product.id, title: product.name, image: product.image, type: "product" });
                    this.currentProducts.push(product);
                  });
                }
              });
            });
          });
          break;
        case "offer":
          this.currentDisplay = "offer";
          this.gridCellsContent = [];
          CatRepository.getOffers().then((offers: Offer[]) => {
            offers.forEach((offer: Offer) => {
              //add to the gridCellsContent
              this.gridCellsContent.push({ id: offer.id.toString(), title: offer.name, image: offer.image, type: "offer" });
            });
          }
          );
          break;
        case "product":
          this.currentDisplay = "product";
          // eslint-disable-next-line no-case-declarations
          const product = this.currentProducts.find((product: Product) => product.id == id);
          if (product != undefined)
            this.command.addProduct(product);
          console.log(this.command.products[0].name)
          this.command.updateTotal();
          console.log(this.command)
          break;
      }
    },
    payOrder() {
      const modal = document.getElementById("payementModal");
      if (modal) modal.style.display = "block";
    },
    unshowModal(idModal: string) {
      const modal = document.getElementById(idModal);
      if (modal) modal.style.display = "none";
    },
    showClientNameModal(payementType: string) {
      this.unshowModal("payementModal");
      this.payementType = payementType;
      const modal = document.getElementById("clientNameModal");
      if (modal) modal.style.display = "block";
    },
    previous() {
      const image = "../../assets/pictures/offer.jpg";
      switch (this.currentDisplay) {
        case "category":
          this.currentDisplay = "home";
          this.gridCellsContent = [];
          // eslint-disable-next-line no-case-declarations
          this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer" });
          this.getCategories();
          break;
        case "offer":
          this.currentDisplay = "home";
          this.gridCellsContent = [];
          // eslint-disable-next-line no-case-declarations

          this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer" });
          this.getCategories();
          break;
        case "subcategory":
          this.currentDisplay = "category";
          this.gridCellsContent = [];
          this.currentCategories.forEach((category: Category) => {
            //add to the gridCellsContent
            this.gridCellsContent.push({ id: category.id, title: category.name, image: category.image, type: "category" });
          });
          break;
        case "product":
          this.currentDisplay = "subcategory";
          this.gridCellsContent = [];
          this.currentSubcategories.forEach((subcategory: Subcategory) => {
            //add to the gridCellsContent
            this.gridCellsContent.push({ id: subcategory.id, title: subcategory.name, image: subcategory.image, type: "subcategory" });
          });
          break;
      }
    },
    deleteProduct(id: number) {
      this.command.removeProduct(id);
    },
    showCart(){
        const modal = document.getElementById("cartModal");
        if (modal && modal.style.display === "block" ) modal.style.display = "none";
        else if (modal) modal.style.display = "block";
    },

  },
  beforeMount() {
    this.getCategories();
  }

})

window.onresize = function (){
    if (window.innerWidth > 1024) {
      const cart = document.getElementById("cartModal");
        if (cart) cart.style.display = "block";
    }
    if(window.innerWidth < 1024){
      const cart = document.getElementById("cartModal");
        if (cart) cart.style.display = "none";
    }
}