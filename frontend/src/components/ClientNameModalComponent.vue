<script lang="ts" src="../services/ts/ClientNameModal.ts"></script>

<template>
  <div class="modal" id="clientNameModal">
    <div v-if="payementType !== 'Account'" class="card">
      <header>
        <h3>Entrez le nom du client</h3>
        <button class="icon-button close-button" @click="unshowModal('clientNameModal')"></button>
      </header>
      <div class="form">
        <input type="hidden" id="paymentMethod" :value="payementType">
        <input type="text" id="clientName" name="clientName" placeholder="Nom du client">
        <div class="submit-button">
          <input type="submit" class="primary-button" id="pay-cart" @click="sendCommande()" value="Valider la commande">
        </div>
      </div>
    </div>
    <div v-if="payementType === 'Account'" class="card">
      <header>
        <h3>Choisir le compte client</h3>
        <button class="icon-button close-button" @click="unshowModal('clientNameModal')"></button>
      </header>
      <div class="form">
        <input type="hidden" id="paymentMethod" :value="payementType">{{ groupToDisplay }}
        <select name="groupe" id="groupe-select" style="width: fit-content" v-model="groupToDisplay"
          @change="changeGroup()">
          <option v-for="group in accounts" :key="group.id" :value="group.name">{{ group.name }}</option>
        </select>
        <div v-for="account in accountsToDisplay" :key="account" class="client-account">
          <div>
            <input v-model="selectedAccount" type="radio" :id="account.id" name="account" :value="account.id">
            <label :for="account.id">{{ account.name }}</label>
          </div>

        </div>
        <div class="submit-button">
          <input type="submit" class="primary-button" id="pay-cart-account" @click="sendCommande()"
            value="Valider la commande">
        </div>
      </div>
    </div>
  </div>
</template>
