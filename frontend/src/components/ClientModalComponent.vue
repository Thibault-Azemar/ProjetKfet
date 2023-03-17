<script lang="ts" src="../services/ts/ClientModalComponent.ts"></script>

<template>
  <div class="modal" id="compteModal">
    <div class="card">
      <header>
        <h3 v-if="!customer">Créer un nouveau compte</h3>
        <h3 v-if="customer">Modifier un compte</h3>
        <button class="icon-button close-button" @click="unshowModal('compteModal')"></button>
      </header>
      <form method="post">
        <div>
          <label class="input-label" for="nom-compte">Nom</label>
          <input name="nom-compte" class="input-field" type="text" id="nom-compte" :value="customer ? customer.name : ''" placeholder="nom client"
                 required>
        </div>
        <div>
          <label class="input-label" for="prenom-compte">Prénom</label>
          <input name="prenom-compte" class="input-field" type="text" id="prenom-compte" :value="customer ? customer.firstname : ''" placeholder="prénom client"
                 required>
        </div>
        <div>
          <label class="input-label" for="groupe">Groupe</label>
          <select name="groupe" class="input-field" id="groupe" required>
            <option value="" selected disabled>Choisir un groupe</option>
            <option value="subcat.id" :selected="customer ? customer.group === 'test' : false" > test </option>
          </select>
        </div>
        <div class="submit-button">
          <input class="primary-button" id="creer-produit" :value="customer ?'Modifier le compte' : 'Créer un compte'" @click="customer ? editCompte() : addCompte()">
        </div>
      </form>
    </div>
  </div>
</template>