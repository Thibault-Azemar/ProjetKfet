<script lang="ts" src="../services/ts/AccountModal.ts"></script>

<template>
  <div id="account-popup" @click.stop>
    <button class="icon-text-button">
      <img src="../assets/pictures/settings.svg" alt="" />
      <p>Paramètres</p>
    </button>
    <div class="divider"></div>
    <button class="icon-text-button">
      <img src="../assets/pictures/logout.svg" alt="" />
      <p>Déconnexion</p>
    </button>
  </div>
</template>
