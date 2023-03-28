<script lang="ts" src="../services/ts/ClientNameModal.ts"></script>

<template>
  <div class="modal" id="clientNameModal">
    <div v-if="payementType !== 'Account'" class="card">
      <header>
        <h3>Entrez le nom du client</h3>
        <button class="icon-button close-button" @click="unshowModal('clientNameModal')"></button>
      </header>
      <form >
        <input type="hidden" :value="payementType">
        <input type="text" id="clientName" name="clientName" placeholder="Nom du client">
        <div class="submit-button">
          <input type="submit" class="primary-button" id="check-cart" @click="sendCommande()" value="Valider la commande">
        </div>
      </form>
    </div>
    <div v-if="payementType === 'Account'" class="card">
      <header>
        <h3>Entrez le nom du client</h3>
        <button class="icon-button close-button" @click="unshowModal('clientNameModal')"></button>
      </header>
      <form>
        <input type="hidden" :value="payementType">
        <select style="width: fit-content">
          <option>DI5</option>
          <option>DI4</option>
          <option>DI3</option>
        </select>
        <div class="client-account">
          <div>
            <input type="radio" id="client1" name="account" value="client1">
            <label  for="client1">Client 1</label>
          </div>
          <div>
            <input type="radio" id="client2" name="account" value="client2">
            <label for="client2">Client 2</label>
          </div>
          <div>
            <input type="radio" id="client3" name="account" value="client3">
            <label for="client3">Client 3</label>
          </div>
          <div>
            <input type="radio" id="client4" name="account" value="client4">
            <label for="client4">Client 4</label>
          </div>
          <div>
            <input type="radio" id="client5" name="account" value="client5">
            <label for="client5">Client 5</label>
          </div>
          <div>
            <input type="radio" id="client6" name="account" value="client6">
            <label for="client6">Client 6</label>
          </div>
          <div>
            <input type="radio" id="client7" name="account" value="client7">
            <label for="client7">Client 7</label>
          </div>
        </div>
        <div class="submit-button">
          <input type="submit" class="primary-button" id="check-cart-account" @click="sendCommande()" value="Valider la commande">
        </div>
      </form>
    </div>
  </div>
</template>
