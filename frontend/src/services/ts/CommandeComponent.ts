import { defineComponent } from "vue";
import CommandeComponent from "../../components/CommandeComponent.vue";
import '../../assets/style/commande.css'
import Category from "../model/CategoryModel";
import CommandesRepository from "../Repository/CommandesRepository";
import Subcategory from "../model/SubcategoryModel";
import Offer from "../Controller/OfferController";
import PayementModalComponent from "../../components/PayementModalComponent.vue";
import ClientNameModalComponent from "../../components/ClientNameModalComponent.vue";

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
    const payementType: string = "";
    return {
      image,
      gridCellsContent,
      payementType
    }

  },
  methods: {
    getCategories() {
      const CatRepository = new CommandesRepository();
      CatRepository.getCategory().then((categories: Category[]) => {
        categories.forEach((category: Category) => {
          //add to the gridCellsContent
          const image = category.image;
          console.log(image)
          this.gridCellsContent.push({ id: category.id, title: category.name, image: image, type: "category" });
          console.log(this.gridCellsContent)
        });
      });
    },
    clickOnCell(type: string, id: string) {
      const CatRepository = new CommandesRepository();
      console.log(type + " " + id)
      this.gridCellsContent = [];
      switch (type) {
        case "category":
          CatRepository.getCategory().then((categories: Category[]) => {
            categories.forEach((category: Category) => {
              if (category.id == id) {
                //add to the gridCellsContent
                category.subcategories.forEach((subcategory: Subcategory) => {
                  this.gridCellsContent.push({ id: subcategory.id, title: subcategory.name, image: subcategory.image, type: "subcategory" });
                });
              }
            });
          });
          break;
        case "subcategory":
          CatRepository.getCategory().then((categories: Category[]) => {
            categories.forEach((category: Category) => {
              category.subcategories.forEach((subcategory: Subcategory) => {
                if (subcategory.id == id) {
                  //add to the gridCellsContent
                  subcategory.products.forEach((product) => {
                    this.gridCellsContent.push({ id: product.id, title: product.name, image: product.image, type: "product" });
                  });
                }
              });
            });
          });
          break;
        case "offer":
          CatRepository.getOffers().then((offers: Offer[]) => {
            offers.forEach((offer: Offer) => {
              //add to the gridCellsContent
              this.gridCellsContent.push({ id: offer.id.toString(), title: offer.name, image: offer.image, type: "offer" });
            });
          }
          );
          break;
      }
    },
    payOrder(){
      const modal = document.getElementById("payementModal");
      if(modal) modal.style.display = "block";
    },
    unshowModal(idModal: string) {
      const modal = document.getElementById(idModal);
      if (modal) modal.style.display = "none";
    },
    showClientNameModal(payementType: string){
      this.unshowModal("payementModal");
      this.payementType = payementType;
      const modal = document.getElementById("clientNameModal");
      if(modal) modal.style.display = "block";
    }
  },
  mounted() {
    const image = "../../assets/pictures/offer.jpg";
    this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer" });
    this.getCategories();
  },
})