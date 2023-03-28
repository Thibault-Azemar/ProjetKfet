<script lang="ts" src="../services/ts/CommandeComponent.ts"></script>

<template>
  <div class="page">
    <div class="commande-header">
      <button class="icon-button"><img src="../assets/pictures/arrow-left.svg"></button>
      <button class="icon-button" id="cart"><img src="../assets/pictures/cart-shopping.svg"></button>
    </div>
    <div class="commande-grid">
      <button class="tertiary-button" v-for="cell in gridCellsContent" :key="cell"
        @click="clickOnCell(cell.type, cell.id)">
        <img :src="cell.image" /> <p>{{ cell.title }}</p></button>
    </div>
    <div class="commande-footer">
      <div class="commande-resume">
        <h2>Résumé de la commande :</h2>
        <div></div>
      </div>
      <div class="commande-checked">
        <p>Total : </p>
        <h2> 10,25 €</h2>
        <button class="primary-button" id="check-cart" @click="payOrder()">Encaisser</button>
      </div>
    </div>
    <PayementModalComponent @show-client-name-modal="showClientNameModal" @unshow-modal="unshowModal"/>
    <ClientNameModalComponent @unshow-modal="unshowModal" :payement-type="payementType"/>
  </div>
</template>
