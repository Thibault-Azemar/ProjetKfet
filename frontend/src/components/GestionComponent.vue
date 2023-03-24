<script lang="ts" src="../services/ts/GestionComponent.ts"></script>

<template>
  <div class="page">
    <div class="options-header">
      <select name="gestion" id="gestion-select" class="big-select" v-model="value">
        <option value="Stock" selected>Stock</option>
        <option value="Offres">Offres</option>
        <option value="Categories">Catégories</option>
        <option value="Users">Utilisateurs</option>
      </select>
      <button v-if="value==='Stock'" class="primary-button" id="entry-stock">Entrée de Stock</button>
      <button class="icon-button" @click="showAddModal()"><img src="../assets/pictures/plus.svg"></button>
    </div>
    <StockComponent @update-product="updateProduct" v-if="value==='Stock'"/>
    <OffresComponent v-if="value==='Offres'"/>
    <CategoriesComponent v-if="value==='Categories'"/>
    <UsersComponent @update-user="updateUser" v-if="value==='Users'"/>
    <ProduitModalComponent @unshow-modal="unshowModal" :produit="isProduit"/>
    <UserModalComponent @unshow-modal="unshowModal" :user="isUser"/>
    <OffreModalComponent @unshow-modal="unshowModal"/>
  </div>
</template>
