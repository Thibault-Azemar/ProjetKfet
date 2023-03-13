<script lang="ts" src="../services/ts/ClientsComponent.ts"></script>

<template>
  <div class="page">
    <div class="options-header">
      <select name="groupe" id="groupe-select" class="big-select" v-model="groupToDisplay" @change="changeGroup()">
        <option v-for="group in accounts" :key="group.id" :value="group.name">{{ group.name }}</option>

      </select>
      <button class="icon-button" @click="showAddModal('clientModal')"><img src="../assets/pictures/plus.svg"></button>
    </div>
    <div class="content">
      <div class="comptes-grid header ">
        <h3>Nom</h3>
        <h3>Prénom</h3>
        <h3>Solde</h3>
      </div>
      <div class="body">
        <div class="comptes-grid " v-for="customers in accountsToDisplay" :key="customers" :id="customers.id">
          <!-- v for clients-->
          <p>{{ customers.name }}</p>
          <p>{{ customers.firstname }}</p>
          <button class="invisible-button" @click="updateSolde()"> {{ customers.money }}</button>
          <button class="icon-button"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button"><img src="../assets/pictures/trash.svg"></button>

        </div>

      </div>
    </div>
  </div>
</template>
