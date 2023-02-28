<script lang="ts" src="../services/ts/UsersComponent.ts"></script>
<template>
  <div class="content">
    <div class="users-grid header ">
      <h3>Nom</h3>
      <h3>Prénom</h3>
      <h3>Rôle</h3>
    </div>
    <div class="body">
      <div class="users-grid "> <!-- v for utilisateurs-->
        <p>user.id</p>
        <p>user.username</p>
        <p>user.role</p>
        <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
        <button class="icon-button"><img src="../assets/pictures/trash.svg"></button>
      </div>

    </div>
  </div>
</template>
