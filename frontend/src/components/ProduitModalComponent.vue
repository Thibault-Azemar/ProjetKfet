<script lang="ts" src="../services/ts/ProduitModalComponent.ts"></script>
<template>
  <div class="modal" id="produitModal">
    <div class="card">
      <header>
        <h3 v-if="!produit">Créer un nouveau produit</h3>
        <h3 v-if="produit">Modifier un produit</h3>
        <button class="icon-button close-button" @click="unshowModal('produitModal')"></button>
      </header>
      <div class="form">
        <label class="input-label" for="nom-produit">Nom</label>
        <input name="nom-produit" class="input-field" type="text" :value="produit ? produit.name : ''"
          placeholder="nom du produit" id="nom-produit" required>

        <label class="input-label" for="prix-achat">Prix d'achat</label>
        <input name="prix-achat" class="input-field" type="number" step="0.01" min="0"
          :value="produit ? produit.purchasePrice.toFixed(2) : ''" placeholder="prix d'achat" id="prix-achat">

        <label class="input-label" for="prix-vente">Prix de vente</label>
        <input name="prix-vente" class="input-field" type="number" step=".01" min="0"
          :value="produit ? produit.sellingPrice.toFixed(2) : ''" placeholder="prix de vente" id="prix-vente" required>

        <label class="input-label" for="prix-vente-member">Prix k'fetier</label>
        <input name="prix-vente-member" class="input-field" type="number" step=".01"
          :value="produit ? produit.sellingPriceMembers.toFixed(2) : ''" placeholder="prix-k'fetier"
          id="prix-vente-member" required>

        <label class="input-label" for="sous-cat">Sous Catégorie</label>
        <select name="sous-cat" class="input-field" id="sous-cat" required>
          <option value="" selected disabled>Choisir sous-catégorie</option>
          <option v-for="subcat in subcategories" :key="subcat.id" :value="subcat.id"
            :selected="produit ? produit.subcategory === subcat.name : false">{{ subcat.name }}</option>
        </select>


        <label class="input-label" for="image-produit">Image</label>
        <input type="file" id="image-produit" accept=".jpg,.jpeg,.png" size="1000000"
          :value="produit ? produit.image : ''">

        <div class="submit-button">
          <button class="primary-button" id="creer-user" @click="produit ? editProduct(produit) : addProduct()">
            {{ produit ? 'Modifier Produit' : 'Créer Produit' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
