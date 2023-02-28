<script lang="ts" src="../services/ts/OffresComponent.ts"></script>
<template>
  <div class="content">
    <div class="offres-grid header ">
      <h3>Nom</h3>
      <h3>Description</h3>
      <h3>Prix</h3>
    </div>
    <div class="body">
      <div class="offres-grid"> <!-- v for offres -->
        <p>Petit déj</p>
        <p>Description</p>
        <p>Prix</p>
        <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
        <button class="icon-button" @click="showSimplePopUp('12dkzckn 3E', true,2)"><img src="../assets/pictures/trash.svg"></button>
      </div>
      <div class="offres-grid">
        <p>Goûter</p>
        <p>Description</p>
        <p>Prix</p>
        <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
        <button class="icon-button" @click="showSimplePopUp('12d,kel 3E',true,2)"><img src="../assets/pictures/trash.svg"></button>
      </div>
    </div>
  </div>
  <SimpleModalComponent :del="popUpDelete" :buttons="popUpButtons" :message="popUpMessage"/>
</template>
