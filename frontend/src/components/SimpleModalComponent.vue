<script lang="ts" src="../services/ts/SimpleModalComponent.ts"></script>

<template>
  <div class="simple-modal index" id="simple-modal">
    <div class="card">
      <header>
        <h3>Suppression</h3>
        <button class="icon-button close-button" @click="unshowModal('simple-modal')"></button>
      </header>
      <div v-if="buttons === 1">
        <p>{{ message }}</p>
        <button class="primary-button" @click="unshowModal('simple-modal')">Ok</button>
      </div>
      <div v-if="buttons === 2 && !del">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="secondary-button" @click="unshowModal('simple-modal')">Annuler</button>
          <button class="primary-button">Valider</button>
        </div>
      </div>
      <div v-if="buttons === 2 && del">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="secondary-button" @click="unshowModal('simple-modal')">Annuler</button>
          <button class="delete-button" @click="deleteObjet()">Supprimer</button>
        </div>
      </div>
      <div v-if="buttons === 3 ">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="secondary-button" @click="unshowModal('simple-modal')">Annuler</button>
          <button class="secondary-button">Non</button>
          <button class="primary-button">Oui</button>
        </div>
      </div>
    </div>
  </div>
</template>
