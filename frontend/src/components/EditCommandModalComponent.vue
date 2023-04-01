<script lang="ts" src="../services/ts/EditCommandModalComponent.ts"></script>

<template>
  <div class="modal" id="editCommandModal">
    <div class="card">
      <header>
        <h3> </h3>
        <button class="icon-button close-button" @click="unshowModal('editCommandModal')"></button>
      </header>
      <div v-if="commande">
        <div>{{commande.name}}</div>
        <div>Heure : {{commande.date.getHours()}}:{{commande.date.getMinutes() < 10 ? '0' + commande.date.getMinutes() : commande.date.getMinutes() }}</div>
        <div>Prix : {{commande.total}}€</div>
        <div>Status : <p :class="commande.state">{{ commande.state }}</p></div>
        <br>
        Produits :
        <br>
        <div style="max-height: 300px; overflow-y: auto; overflow-x: hidden">
          <div style="display: grid; grid-template-columns: 120px 120px; align-items: center;" v-for="produit in commande.products" :key="produit.id">
              {{produit.name}} test test test test
              <select class="input-status" :class="produit.state" @change="editProductState(produit)">
                <option value="wait" :selected="produit.state === 'wait'">En attente</option>
                <option value="loading" :selected="produit.state === 'loading'">En cours</option>
                <option value="end" :selected="produit.state === 'end'">Terminé</option>
              </select>
            {{produit.name}}
            <select class="input-status" :class="produit.state" @change="editProductState(produit)">
              <option value="wait" :selected="produit.state === 'wait'" >En attente</option>
              <option value="loading"  :selected="produit.state === 'loading'">En cours</option>
              <option value="end"  :selected="produit.state === 'end'">Terminé</option>
            </select>
            {{produit.name}}
            <select class="input-status" :class="produit.state" @change="editProductState(produit)">
              <option value="wait" :selected="produit.state === 'wait'" >En attente</option>
              <option value="loading" :selected="produit.state === 'loading'">En cours</option>
              <option value="end" :selected="produit.state === 'end'">Terminé</option>
            </select>
            {{produit.name}}
            <select class="input-status" :class="produit.state" @change="editProductState(produit)">
              <option class="wait" value="wait" :selected="produit.state === 'wait'" >En attente</option>
              <option class="loading" value="loading" :selected="produit.state === 'loading'">En cours</option>
              <option value="end" :selected="produit.state === 'end'">Terminé</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
