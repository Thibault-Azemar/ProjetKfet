<script lang="ts" src="../services/ts/ClientsComponent.ts"></script>

<template>
  <div class="page">
    <div class="options-header">
      <select name="groupe" id="groupe-select" class="big-select" v-model="value">
        <option value="DI5" selected>DI5</option> <!-- v-for les groupes -->
        <option value="DI4">DI4</option>
        <option value="DI3">DI3</option>
        <option value="Peip">Peip</option>
        <option value="Kfetier">Kfetier</option>
      </select>
      <button class="icon-button" @click="showAddModal()"><img src="../assets/pictures/plus.svg"></button>
    </div>
    <div class="content">
      <div class="comptes-grid header ">
        <h3>Nom</h3>
        <h3>Prénom</h3>
        <h3>Solde</h3>
      </div>
      <div class="body">
        <div class="comptes-grid "> <!-- v for clients-->
          <p> Thuriot </p>
          <p> Aurélie </p>
          <button class="invisible-button" @click="updateSolde()"> test</button>
          <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button" ><img src="../assets/pictures/trash.svg"></button>
          <p> Blumstein </p>
          <p> Thomas </p>
          <button class="invisible-button" @click="updateSolde()"> test</button>
          <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button" ><img src="../assets/pictures/trash.svg"></button>
          <p> Azemar </p>
          <p> Thibault </p>
          <button class="invisible-button" @click="updateSolde()"> test</button>
          <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button" ><img src="../assets/pictures/trash.svg"></button>
        </div>
      </div>
    </div>
    <ClientModalComponent @unshow-modal="unshowModal"/>
  </div>
</template>
