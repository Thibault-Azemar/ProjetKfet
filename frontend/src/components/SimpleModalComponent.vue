<script lang="ts" src="../services/ts/SimpleModalComponent.ts"></script>

<template>
  <div class="modal" id="simple-modal" style="display:block;">
    <div class="card" style="display:block;">
      <div v-if="buttons == 1">
        {{message}}
        <button  class="primary-button">Ok</button>
      </div>
      <div v-if="buttons == 2 && del === 'false'">
        <button class="primary-button">Valider</button>
        <button class="secondary-button">Annuler</button>
      </div>
      <div v-if="buttons == 2 && del === 'true'">
        Voulez vous supprimer {{message}} ?
        <button class="delete-button">Supprimer</button>
        <button class="secondary-button">Annuler</button>
      </div>
      <div v-if="buttons == 3 ">

        <button class="primary-button">Oui</button>
        <button class="secondary-button">Non</button>
        <button class="secondary-button">Annuler</button>
      </div>
    </div>
  </div>
</template>
