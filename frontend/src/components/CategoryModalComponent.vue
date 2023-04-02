<script lang="ts" src="../services/ts/CategoryModalComponent.ts"></script>

<template>
  <div class="modal" id="categoryModal">
    <div class="card">
      <header>
        <h3 v-if="category">Modifier la catégorie</h3>
        <h3 v-if="!category">Créer une catégorie</h3>
        <button class="icon-button close-button" @click="unshowModal('categoryModal')"></button>
      </header>
      <div class="form">
        <label for="nom">Nom du groupe</label>
        <input type="text" id="nameCategory" :value="category ? category.name : ''" placeholder="Nom de la catégorie">
        <div class="submit-button">
          <button class="primary-button" id="creer-produit" :value="category ? 'Modifier' : 'Créer'"
            @click="category ? editCat(category) : addCat()">{{ category ? 'Modifier' : 'Créer' }}</button>
        </div>
      </div>
      <button v-if="category" class="delete-button" @click="deleteCategory(category)">Supprimer</button>
    </div>
  </div>
</template>
