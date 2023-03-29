<script lang="ts" src="../services/ts/UpdateMoneyModal.ts"></script>
<template>
  <div class="modal" id="updateMoney">
    <div class="card">
      <header>
        <h3>Modifier le montant</h3>
        <button class="icon-button close-button" @click="unshowModal('updateMoney')"></button>
      </header>
      <form class="flex">
        Argent sur le compte : {{ customer ? customer.money : 0}} €
        <div>
          <a class="a-button secondary-button icon-minus minus-button" @click="minus('money')"></a>
          <input class="quantity-input" type="number" id="money" value="0">
          <a class="a-button secondary-button icon-plus plus-button" @click="plus('money')"></a>
        </div>
        <div class="submit-button">
          <input class="primary-button" id="update-money" value="Modifier" @click="updateMoney(customer.id)">
        </div>
      </form>
    </div>
  </div>

</template>
