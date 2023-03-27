<script lang="ts" src="../services/ts/CommandeComponent.ts"></script>

<template>
  <div class="page">
    <div class="commande-header">
      <button class="icon-button" @click="previous()"><img src="../assets/pictures/arrow-left.svg"></button>
      <button class="icon-button" id="cart"><img src="../assets/pictures/cart-shopping.svg"></button>
    </div>
    <div class="commande-grid">
      <button class="tertiary-button" v-for="cell in gridCellsContent" :key="cell"
        @click="clickOnCell(cell.type, cell.id)">
        {<img :src="cell.image" />} {{ cell.title }}</button>
    </div>
    <div class="commande-footer">
      <div class="commande-resume">
        <h2>Résumé de la commande :</h2>
        <p v-for="product in command.products" :key="product">{{ product.name }}</p>
      </div>
      <div class="commande-checked">
        <p>Total : </p>
        <h2 v-bind="command in command" :key="command">{{ command ? command.total : 0 }} €</h2>
        <button class="primary-button" id="check-cart">Encaisser</button>
      </div>

    </div>
  </div>
</template>
