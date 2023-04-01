<script lang="ts" src="../services/ts/ClientModalComponent.ts"></script>

<template>
  <div class="modal" id="compteModal">
    <div class="card">
      <header>
        <h3 v-if="!customer">Créer un nouveau compte</h3>
        <h3 v-if="customer">Modifier un compte</h3>
        <button class="icon-button close-button" @click="unshowModal('compteModal')"></button>
      </header>
      <div class="form">

        <label class="input-label" for="nom-compte">Nom</label>
        <input name="nom-compte" class="input-field" type="text" id="nom-compte" :value="customer ? customer.name : ''"
          placeholder="nom client" required>

        <label class="input-label" for="prenom-compte">Prénom</label>
        <input name="prenom-compte" class="input-field" type="text" id="prenom-compte"
          :value="customer ? customer.firstname : ''" placeholder="prénom client" required>

        <label class="input-label" for="groupe">Groupe</label>
        <select name="groupe" class="input-field" id="groupe" required>
          <option value="" :selected="!customer" disabled>Choisir un groupe</option>
          <option v-for="group in groups" :key="group" :value="group.id"
            :selected="customer ? customer.group === group.name : false">
            {{ group.name }}</option>
        </select>

        <div class="submit-button">
          <button class="primary-button" id="creer-user" @click="customer ? editCompte() : addCompte()">
            {{ customer ? 'Modifier le compte' : 'Créer un compte' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>