<script lang="ts" src="../services/ts/ClientsComponent.ts"></script>

<template>
  <div class="page">
    <div class="options-header">
      <select name="groupe" id="groupe-select" class="big-select" v-model="groupToDisplay" @change="changeGroup()">
        <option v-for="group in accounts" :key="group.id" :value="group.name">{{ group.name }}</option>
      </select>
      <button class="icon-button" @click="showAddModal()"><img src="../assets/pictures/plus.svg"></button>
      <button class="primary-button" id="group-gestion" @click="showGroupModal()">Gestion groupes</button>
    </div>
    <div class="content-compte">
      <div class="comptes-grid header ">
        <h3>Nom</h3>
        <h3>Prénom</h3>
        <h3>Solde</h3>
      </div>
      <div class="body-compte">
        <div class="comptes-grid nthchild " v-for="customer in accountsToDisplay" :key="customer" :id="customer.id">
          <p>{{ customer.name }}</p>
          <p>{{ customer.firstname }}</p>
          <button class="invisible-button" :class="customer.money < 0 ? 'red' : 'green'" @click="updateSolde(customer)">
            {{ parseFloat(customer.money).toFixed(2) }}</button>
          <button class="icon-button" @click="showAddModal(customer)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button" @click="deleteCompte(customer)"><img src="../assets/pictures/trash.svg"></button>
        </div>

      </div>
    </div>
    <ClientModalComponent @unshow-modal="unshowModal" :customer="isCustomer" />
    <UpdateMoneyModalComponent @unshow-modal="unshowModal" :customer="customerMoney" />
    <GroupModalComponent ref="GroupModalComponent" @delete-group="deleteGroup" @unshow-modal="unshowModal" />
  </div>
  <SimpleModalComponent @delete-group="deleteGroupFromList" @delete-account="deleteAccount" :objet="objet" :type="type"
    :del="del" :buttons="buttons" :message="message" />
</template>
