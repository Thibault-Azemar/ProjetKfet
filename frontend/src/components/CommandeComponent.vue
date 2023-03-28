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
        <img :src="cell.image" />
        <p>{{ cell.title }}</p>
      </button>
    </div>
    <div class="commande-footer">
      <div class="commande-resume">
        <h2>Résumé de la commande :</h2>
        <div class="command-list">
          <p class="command-list-grid" v-for="product in command.products" :id="command.products.indexOf(product)"
            :key="product">
            {{ product ? product.name : null }}
            <button v-if="product" class="icon-button-list" @click="deleteProduct(command.products.indexOf(product))"><img
                src="../assets/pictures/close.svg"></button>
          </p>
        </div>
      </div>
      <div class="commande-checked">
        <p>Total : </p>
        <h2 v-bind="command in command" :key="command">{{ command ? command.total : 0 }} €</h2>
        <button class="primary-button" id="check-cart" @click="payOrder()"
          :disabled="command.products.length === 0">Encaisser</button>
      </div>

    </div>
    <PayementModalComponent @show-client-name-modal="showClientNameModal" @unshow-modal="unshowModal" />
    <ClientNameModalComponent @unshow-modal="unshowModal" :payement-type="payementType" />
  </div></template>
