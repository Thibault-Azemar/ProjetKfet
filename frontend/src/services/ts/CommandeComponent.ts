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
      type: string,
      stock: number
    }
    const image: string = "../../assets/pictures/offer.jpg";
    const gridCellsContent: gridCellContent[] = [];
    const currentDisplay: string = "home";
    const command = new Commande();
    const currentCategories: Category[] = [];
    const currentSubcategories: Subcategory[] = [];
    const currentProducts: Product[] = [];
    const payementType: string = "";
    const currentOffer: Offer = new Offer();
    const step: number = 0;
    const isOffer: boolean = false;
    const init = true
    return {
      image,
      gridCellsContent,
      payementType,
      command,
      currentCategories,
      currentSubcategories,
      currentProducts,
      currentDisplay,
      currentOffer,
      step,
      isOffer,
      init
    }

  },
  methods: {
    getCategories() {
      this.currentDisplay = "home";
      this.gridCellsContent = [];
      this.currentCategories = [];
      const image = "../../assets/pictures/offer.jpg";
      this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer", stock: 1 });
      const CatRepository = new CommandesRepository();
      CatRepository.getCategory().then((categories: Category[]) => {
        categories.forEach((category: Category) => {
          //add to the gridCellsContent
          const image = category.image;
          this.gridCellsContent.push({ id: category.id, title: category.name, image: image, type: "category", stock: 1 });
          this.currentCategories.push(category);
        });
      });
    },
    clickOnCell(type: string, id: string,) {
      const CatRepository = new CommandesRepository();
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
                  this.gridCellsContent.push({ id: subcategory.id, title: subcategory.name, image: subcategory.image, type: "subcategory", stock: 1 });
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
                    this.gridCellsContent.push({ id: product.id, title: product.name, image: product.image, type: "product", stock: product.stock });
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
              this.gridCellsContent.push({ id: offer.id.toString(), title: offer.name, image: offer.image, type: "insideOffer", stock: 1 });
            });
          }
          );

          break;
        case "insideOffer":
          this.isOffer = true;
          // eslint-disable-next-line no-case-declarations
          let i = 0
          this.currentDisplay = "insideOffer";
          this.gridCellsContent = [];
          CatRepository.getOffers().then((offers: Offer[]) => {
            offers.forEach((offer: Offer) => {
              if (offer.id == id) {
                this.currentOffer = offer;
                if (this.init) {
                  this.command.addOffer(offer);
                  this.command.updateTotal();
                  this.init = false
                }
              }
            });
            this.currentOffer.catIds.forEach((cat: string) => {
              CatRepository.getCategory().then((categories: Category[]) => {
                if (this.step < this.currentOffer.nbproducts) {
                  if (this.step < categories.length) {
                    if (i == this.step) {
                      categories.forEach((category: Category) => {
                        if (category.id == cat) {
                          this.currentCategories.push(category);
                          this.gridCellsContent.push({ id: category.id, title: category.name, image: category.image, type: "category", stock: 1 });
                        }
                      });
                      i++
                    }
                    else {
                      i++;
                    }
                  }
                }
                else {
                  this.isOffer = false;
                  this.step = 0;
                  this.init = true
                  this.currentDisplay = "home";
                  this.gridCellsContent = [];
                  this.gridCellsContent.push({ id: "offer", title: "offre", image: "", type: "offer", stock: 1 });
                  this.getCategories();
                }
              }
              );
            });
          });
          break;
        case "product":
          this.currentDisplay = "subcategory";
          // eslint-disable-next-line no-case-declarations
          const product = this.currentProducts.find((product: Product) => product.id == id);
          if (product != undefined)
            this.command.addProduct(product, this.isOffer);
          this.command.updateTotal();
          if (this.isOffer) {
            this.step++;
            this.clickOnCell("insideOffer", this.currentOffer.id.toString());
          }
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
          this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer", stock: 1 });
          this.getCategories();
          break;
        case "offer":
          this.currentDisplay = "home";
          this.gridCellsContent = [];
          this.gridCellsContent.push({ id: "offer", title: "offre", image: image, type: "offer", stock: 1 });
          this.getCategories();
          break;
        case "subcategory":
          this.currentDisplay = "category";
          this.gridCellsContent = [];
          this.currentCategories.forEach((category: Category) => {
            //add to the gridCellsContent
            this.gridCellsContent.push({ id: category.id, title: category.name, image: category.image, type: "category", stock: 1 });
          });
          break;
        case "product":
          this.currentDisplay = "subcategory";
          this.gridCellsContent = [];
          this.currentSubcategories.forEach((subcategory: Subcategory) => {
            //add to the gridCellsContent
            this.gridCellsContent.push({ id: subcategory.id, title: subcategory.name, image: subcategory.image, type: "subcategory", stock: 1 });
          });
          break;
      }
    },
    deleteProduct(id: number) {
      this.command.removeProduct(id);
    },
    deleteOffer(id: number) {
      this.command.removeOffer(id);

    },
    showCart() {
      const modal = document.getElementById("cartModal");
      if (modal && modal.style.display === "block") modal.style.display = "none";
      else if (modal) modal.style.display = "block";
    },
    refresh() {
      location.reload();
    },
  },
  beforeMount() {
    this.getCategories();
  }

})

window.onresize = function () {
  if (window.innerWidth > 1024) {
    const cart = document.getElementById("cartModal");
    if (cart) cart.style.display = "block";
  }
  if (window.innerWidth < 1024) {
    const cart = document.getElementById("cartModal");
    if (cart) cart.style.display = "none";
  }
}