<script lang="ts" src="../services/ts/OffreModalComponent.ts"></script>

<template>
  <div class="modal" id="offreModal">
    <div class="big-card">
      <header>
        <h3>Créer une offre</h3>
        <button class="icon-button close-button" @click="unshowModal('offreModal')"></button>
      </header>
      <form method="post" class="offres-modal-grid">
        <div>
          <label class="input-label" for="nom-offre">Nom</label>
          <input name="nom-offre" class="input-field" type="text" id="nom-offre" placeholder="nom offre" required>
        </div>
        <div>
          <label class="input-label" for="prix-offre">Prix</label>
          <input name="prix-offre" class="input-field" type="number" id="prix-offre" placeholder="prix offre" required>
        </div>
        <h4>Produits</h4>
        <div style="overflow-y: auto">
          <div><!-- v-for catégories-->
            <div class="flex-row">
              <p>Nom cat 1</p>
              <div>
                <a class="a-button secondary-button icon-minus minus-button" @click="minus('test')"></a>
                <input class="quantity-input" type="number" id="test" value="0" min="0">
                <a class="a-button secondary-button icon-plus plus-button" @click="plus('test')"></a>
              </div>
            </div>
            <div><!-- v-for ss catégories-->
              <div class="flex-row ss-cat">
                <p>Nom sous cat 1</p>
                <div>
                  <a class="a-button secondary-button icon-minus minus-button" @click="minus('test2')"></a>
                  <input class="quantity-input" type="number" id="test2" value="0" min="0">
                  <a class="a-button secondary-button icon-plus plus-button" @click="plus('test2')"></a>
                </div>
              </div>
              <div> <!-- v-for produit -->
                <div class="flex-row produit">
                  <p>Nom produit 1</p>
                  <div>
                    <a class="a-button secondary-button icon-minus minus-button" @click="minus('test3')"></a>
                    <input class="quantity-input" type="number" id="test3" value="0" min="0">
                    <a class="a-button secondary-button icon-plus plus-button" @click="plus('test3')"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label class="input-label" for="image-produit">Image</label>
          <input type="file" id="image-produit" accept=".jpg,.jpeg,.png" size="1000000"
                 >
        </div>
        <div class="submit-button">
          <input class="primary-button" value="Créer une offre">
        </div>
      </form>
    </div>
  </div>
</template>
