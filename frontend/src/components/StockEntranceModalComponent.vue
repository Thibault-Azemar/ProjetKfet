<script lang="ts" src="../services/ts/StockEntranceModalComponent.ts"></script>

<template>
  <div class="modal" id="stockEntranceModal">
    <div class="card">
      <header>
        <h3>Entrée de stock</h3>
        <button class="icon-button close-button" @click="unshowModal('stockEntranceModal')"></button>
      </header>
      <form class="formproduct">
        <div style="max-height: calc(100% - 50px);overflow-y: auto"><!--v-for sous categorie-->
          <h3 style="margin-left: 0">Sous-catégorie</h3>
          <div class="grid-product"> <!--v-for produit-->
            <div style="display: flex;align-items: center">test</div>
            <div>
              <a class="a-button secondary-button icon-minus minus-button" @click="minus('test')"></a>
              <input class="quantity-input" type="number" id="test1" value="0" min="0">
              <a class="a-button secondary-button icon-plus plus-button" @click="plus('test')"></a>
            </div>
          </div>
        </div>
        <div class="submit-button">
          <input class="primary-button" id="entry-stock" value="Valider"
                 @click="stockEntrance()">
        </div>
      </form>
    </div>
  </div>

</template>
