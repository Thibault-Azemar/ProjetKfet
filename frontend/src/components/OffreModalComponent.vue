<script lang="ts" src="../services/ts/OffreModalComponent.ts"></script>

<template>
  <div class="modal" id="offreModal">
    <div class="big-card">
      <header style="margin-left: 10px">
        <h3 v-if="!offer">Créer une offre</h3>
        <h3 v-if="offer">Modifier une offre</h3>
        <button class="icon-button close-button" @click="unshowModal('offreModal')"></button>
      </header>
      <div method="post" class="offres-modal-grid">
        <label class="input-label" for="nom-offre">Nom</label>
        <input name="nom-offre" class="input-field" type="text" id="nom-offre" :value="offer ? offer.name : ''"
          placeholder="nom offre" required>

        <label class="input-label" for="prix-offre">Prix</label>
        <input name="prix-offre" class="input-field" type="number" id="prix-offre" :value="offer ? offer.price : ''"
          placeholder="prix offre" required>

        <label class="input-label" for="prix-offre-membre">Prix K'fetier</label>
        <input name="prix-offre" class="input-field" type="number" id="prix-offre-membre"
          :value="offer ? offer.priceMembers : ''" placeholder="prix kfetier offre" required>

        <label class="input-label" for="image-produit">Image</label>
        <input type="file" id="image-offre" accept=".jpg,.jpeg,.png" size="1000000" :value="offer ? offer.image : ''">

        <h4>Produits</h4>
        <div style="overflow-y: auto">
          <div v-for="category in categories" :key="category.id"><!-- v-for catégories-->
            <div class="grid-offer">
              <p>{{ category.name }}</p>
              <div class="right">
                <a class="a-button secondary-button icon-minus minus-button" @click="minus(category.id)"></a>
                <input class="quantity-input" type="number" :id="category.id"
                  :value="offer ? countOccurences(offer.categoryOccurences, category.id) : 0" min="0">
                <a class="a-button secondary-button icon-plus plus-button" @click="plus(category.id)"></a>
              </div>
            </div>
            <div v-for="subcategory in category.subcategories" :key="subcategory.id"><!-- v-for ss catégories-->
              <div class="grid-offer ss-cat">
                <p>{{ subcategory.name }}</p>
                <div class="right">
                  <a class="a-button secondary-button icon-minus minus-button" @click="minus(subcategory.id)"></a>
                  <input class="quantity-input" type="number" :id="subcategory.id"
                    :value="offer ? countOccurences(offer.subcategoryOccurences, subcategory.id) : 0" min="0">
                  <a class="a-button secondary-button icon-plus plus-button" @click="plus(subcategory.id)"></a>
                </div>
              </div>
              <div v-for="product in subcategory.products" :key="product.id"> <!-- v-for produit -->
                <div class="grid-offer produit">
                  <p>{{ product.name }}</p>
                  <div class="right">
                    <a class="a-button secondary-button icon-minus minus-button" @click="minus(product.id)"></a>
                    <input class="quantity-input" type="number" :id="product.id"
                      :value="offer ? countOccurences(offer.productOccurences, product.id) : 0" min="0">
                    <a class="a-button secondary-button icon-plus plus-button" @click="plus(product.id)"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="submit-button">
          <input class="primary-button" @click="addOffer()" value="Créer une offre">
        </div>
      </div>
    </div>
  </div>
</template>
