
import Subcategory from '@/services/model/SubcategoryModel';

<script lang="ts" src="../services/ts/StockEntranceModalComponent.ts"></script>

<template>
  <div class="modal" id="stockEntranceModal">
    <div class="card">
      <header>
        <h3>Entrée de stock</h3>
        <button class="icon-button close-button" @click="unshowModal('stockEntranceModal')"></button>
      </header>
      <div class="form formproduct">
        <div v-for="subcategory in subcategories" :key="subcategory"
          style="max-height: calc(100% - 50px);overflow-y: auto"><!--v-for sous categorie-->
          <h3 style="margin-left: 0">{{ subcategory.name }}</h3>
          <div v-for="product in subcategory.products" :key="product" class="grid-product"> <!--v-for produit-->
            <div style="display: flex;align-items: center">{{ product.name }}</div>
            <div>
              <a class="a-button secondary-button icon-minus minus-button" @click="minus(product.id)"></a>
              <input class="quantity-input" type="number" :id="'input' + product.id" value="0">
              <a class="a-button secondary-button icon-plus plus-button" @click="plus(product.id)"></a>
            </div>
          </div>
        </div>
        <div class="submit-button">
          <button class="primary-button" @click="stockEntrance()">Valider</button>
        </div>
      </div>
    </div>
  </div>
</template>
