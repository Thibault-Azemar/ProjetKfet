
import Subcategory from '@/services/model/SubcategoryModel';

<script lang="ts" src="../services/ts/SubcategoryModalComponent.ts"></script>

<template>
  <div class="modal" id="subcategoryModal">
    <div class="card">
      <header>
        <h3 v-if="category">{{ category.name }}</h3>
        <button class="icon-button close-button" @click="unshowModal('subcategoryModal')"></button>
      </header>
      <div class="content-group">
        <div class="group-grid" v-for="subcategory in category.subcategories" :key="subcategory">
          <!-- v for ss category -->
          <p>{{ subcategory.name }}</p>
          <button class="icon-button little-icon" @click="showEditModal(subcategory)"><img
              src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteSubcategory(subcategory)"><img
              src="../assets/pictures/trash.svg"></button>
        </div>
      </div>
      <div style="display:flex; justify-content: center">
        <button class="primary-button" id="creer-sscat" @click="showEditModal()">Créer</button>
      </div>
    </div>
  </div>
  <div class="modal" id="sscatEditModal">
    <div class="card">
      <header>
        <h3 v-if="!isSubCat">Créer une Sous Categorie</h3>
        <h3 v-if="isSubCat">Modifier la Sous Categorie</h3>
        <button class="icon-button close-button" @click="unshowModal('sscatEditModal')"></button>
      </header>
      <div class="form">
        <label for="nom">Nom de la sous catégorie</label>
        <input type="text" id="subcatName" :value="isSubCat ? isSubCat.name : ''" placeholder="Nom de la sous catégorie">
        <div class="submit-button">
          <input class="primary-button" id="creer-produit" :value="isSubCat ? 'Modifier' : 'Créer'"
            @click="isSubCat ? editSscat(isSubCat) : addSscat()">
        </div>
      </div>
    </div>
  </div>
</template>
