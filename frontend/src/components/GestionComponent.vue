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
      <button v-if="value === 'Stock'" class="primary-button" id="entry-stock">Entrée Stock</button>
      <button class="icon-button" @click="showAddModal()"><img src="../assets/pictures/plus.svg"></button>
    </div>
    <StockComponent ref="StockComponent" @delete-objet="deleteObjet" @update-product="updateProduct"
      v-if="value === 'Stock'" />
    <OffresComponent ref="OffresComponent" :categories="categories" @delete-objet="deleteObjet"
      @update-offer="updateOffer" v-if="value === 'Offres'" />
    <CategoriesComponent ref="CategoriesComponent" :categories="categories" @delete-objet="deleteObjet"
      v-if="value === 'Categories'" />
    <UsersComponent ref="UsersComponent" @delete-objet="deleteObjet" @update-user="updateUser" v-if="value === 'Users'" />
    <ProduitModalComponent @product-added="productAdded" @unshow-modal="unshowModal" :produit="isProduit" />
    <UserModalComponent @addUser="addUser" @unshow-modal="unshowModal" :user="isUser" />
    <OffreModalComponent ref @offer-added="offerAdded" @unshow-modal="unshowModal" :categories="categories"
      :offer="isOffer" />
  </div>
  <SimpleModalComponent @delete-product="deleteProduct" @delete-offer="deleteOffer" @delete-user="deleteUser"
    :objet="deleteObj" :type="objetType" :del="popUpDelete" :buttons="popUpButtons" :message="popUpMessage" />
</template>
