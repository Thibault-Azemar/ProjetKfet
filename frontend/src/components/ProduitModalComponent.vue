<script lang="ts" src="../services/ts/ProduitModalComponent.ts"></script>
<template>
  <div class="modal" id="produitModal">
    <div class="card">
      <header>
        <h3>Créer un nouveau produit</h3>
        <button class="icon-button close-button" @click="unshowModal('produitModal')"></button>
      </header>
      <form method="post">
        <div>
          <label class="input-label" for="input-ref-label">Nom</label>
          <input name="nom-produit" class="input-field" type="text" placeholder="nom du produit" id="input-ref-label"
                 required>
        </div>
        <div>
          <label class="input-label" for="prix-achat">Prix d'achat</label>
          <input name="prix-achat" class="input-field" type="number" placeholder="prix d'achat"
                 id="prix-achat">
        </div>
        <div>
          <label class="input-label" for="prix-vente">Prix de vente</label>
          <input name="prix-vente" class="input-field" type="number" placeholder="prix de vente"
                 id="prix-vente" required>
        </div>
        <div>
          <label class="input-label" for="sous-cat">Sous Catégorie</label>
          <select name="sous-cat" class="input-field"
                  id="sous-cat" required>
            <option value="" selected>Choisir sous-catégorie</option>
            <option value="cat2">cat2</option>
            <option value="cat3">cat3</option>
            <option value="cat4">cat4</option>
          </select>
        </div>
        <div>
          <label class="input-label" for="image-produit">Image</label>
          <input type="file" id="image-produit" accept=".jpg,.jpeg.png" size="1000000">
        </div>
        <div class="submit-button">
          <input type="submit" class="primary-button" id="creer-produit" value="Créer produit">
        </div>
      </form>
    </div>
  </div>
</template>
