
import Subcategory from '@/services/model/SubcategoryModel';

<script lang="ts" src="../services/ts/StockComponent.ts"></script>
<template>
  <div class="content">
    <div v-for="category in stock" :key="category" :id="category.id"> <!-- v for catégories-->
      <!-- <h3>{{ category.name }}</h3> -->
      <div v-for="Subcategory in category.subcategories" :key="Subcategory" :id="Subcategory.id">
        <!-- v for sous catégories-->
        <h3>{{ Subcategory.name }}</h3>
        <div v-for="Product in Subcategory.products" :key="Product" :id="Product.id" class="stock"> <!-- v for produits-->
          <p>{{ Product.name }}</p>
          <p>{{ Product.sellingPrice }}</p>
          <p>{{ Product.sellingPriceMembers }}</p>
          <p>{{ Product.stock }}</p>
          <button class="icon-button" @click="updateProduct(Product)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button" @click="deleteProduct(Product)"><img src="../assets/pictures/trash.svg"></button>
        </div>
      </div>
    </div>
  </div>
</template>

