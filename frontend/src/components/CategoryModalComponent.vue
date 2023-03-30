<script lang="ts" src="../services/ts/CategoryModalComponent.ts"></script>

<template>
  <div class="modal" id="categoryModal">
    <div class="card">
      <header>
        <h3 v-if="category">Modifier la catégorie</h3>
        <h3 v-if="!category">Créer une catégorie</h3>
        <button class="icon-button close-button" @click="unshowModal('categoryModal')"></button>
      </header>
      <form>
        <label for="nom">Nom du groupe</label>
        <input type="text" id="nom" :value="category ? category.name : ''" placeholder="Nom de la catégorie">
        <div class="submit-button">
          <input class="primary-button" id="creer-produit" :value="category ? 'Modifier' : 'Créer'"
                 @click="category ? editCat(category) : addCat()">
        </div>
      </form>
      <button class="delete-button" @click="deleteCategory(category)">Supprimer</button>
    </div>
  </div>
</template>
