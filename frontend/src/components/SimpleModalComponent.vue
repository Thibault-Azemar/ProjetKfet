<script lang="ts" src="../services/ts/SimpleModalComponent.ts"></script>

<template>
  <div class="modal" id="simple-modal">
    <div class="card">
      <header>
        <h2>Suppression</h2>
        <button class="icon-button close-button" @click="unshowPopUp('simple-modal')"></button>
      </header>
      <div v-if="buttons === 1">
        <p>{{ message }}</p>
        <button class="primary-button">Ok</button>
      </div>
      <div v-if="buttons === 2 && !del">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="primary-button">Valider</button>
          <button class="secondary-button">Annuler</button>
        </div>
      </div>
      <div v-if="buttons === 2 && del">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="delete-button">Supprimer</button>
          <button class="secondary-button">Annuler</button>
        </div>
      </div>
      <div v-if="buttons === 3 ">
        <p>{{ message }}</p>
        <div class="row-align">
          <button class="primary-button">Oui</button>
          <button class="secondary-button">Non</button>
          <button class="secondary-button">Annuler</button>
        </div>
      </div>
    </div>
  </div>
</template>
