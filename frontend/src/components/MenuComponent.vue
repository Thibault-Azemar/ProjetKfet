<script lang="ts" src="../services/ts/MenuComponent.ts"></script>

<template>
  <div class="menu">
    <div id="items">
      <router-link to="/commande" class="router-menu"><img
          src="../assets/pictures/pen-to-square.svg"></router-link>
      <router-link to="/suivi" class="router-menu" ><img src="../assets/pictures/book.svg"></router-link>
      <router-link to="/comptes" class="router-menu" ><img src="../assets/pictures/user.svg"></router-link>
      <router-link to="/gestion" class="router-menu" ><img src="../assets/pictures/settings.svg"></router-link>
    </div>
    <div id="roles" @click="showAccountModal()" @click.stop></div>
  </div>
  <AccountModalComponent/>
</template>
