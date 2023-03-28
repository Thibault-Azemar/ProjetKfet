<script lang="ts" src="../services/ts/PayementModalComponent.ts"></script>

<template>
  <div class="modal" id="payementModal">
    <div class="card">
      <header>
        <h3>Choisir le moyen de payement</h3>
        <button class="icon-button close-button" @click="unshowModal('payementModal')"></button>
      </header>
      <div class="payement-grid">
        <button class="tertiary-button" @click="showClientNameModal('CB')"><img src="../assets/pictures/payement/credit-card-solid.svg"><p>Carte</p></button>
        <button class="tertiary-button" @click="showClientNameModal('Money')"><img src="../assets/pictures/payement/coins-solid.svg"><p>Espèce</p></button>
        <button class="tertiary-button" @click="showClientNameModal('Lyf')"><img src="../assets/pictures/payement/logo_lyfpay.png"><p>Lyf Pay</p></button>
        <button class="tertiary-button" @click="showClientNameModal('Account')"><img src="../assets/pictures/user.svg"><p>Compte</p></button>
      </div>
    </div>
  </div>
</template>
