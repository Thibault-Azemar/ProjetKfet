<script lang="ts" src="../services/ts/OffresComponent.ts"></script>
<template>
  <div class="content">
    <div class="offres-grid header ">
      <h3>Nom</h3>
      <h3>Description</h3>
      <h3>Prix</h3>
      <h3 class="ordinateur">Prix Kfet</h3>
    </div>
    <div class="body">
      <div class="offres-grid nthchild" v-for="offer in offers" :key="offer" :id="offer.id"> <!-- v for offres -->
        <p>{{ offer.name }}</p>
        <p>{{ offer.description }} </p>
        <p>{{ offer.price }}</p>
        <p class="ordinateur">{{ offer.priceMembers }}</p>
        <button class="icon-button" @click="updateOffer(offer)"><img src="../assets/pictures/pen.svg"></button>
        <button class="icon-button" @click="deleteOffer(offer)"><img src="../assets/pictures/trash.svg"></button>
      </div>
    </div>
  </div>
</template>
