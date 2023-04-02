<script lang="ts" src="../services/ts/EditCommandModalComponent.ts"></script>

<template>
  <div class="modal" id="editCommandModal">
    <div class="card">
      <header>
        <h3> </h3>
        <button class="icon-button close-button" @click="unshowModal('editCommandModal')"></button>
      </header>
      <div v-if="commande">
        <div>{{ commande.name }}</div>
        <div>Heure : {{ commande.date.getHours() }}:{{ commande.date.getMinutes() < 10 ? '0' + commande.date.getMinutes()
          : commande.date.getMinutes() }}</div>
            <div>Prix : {{ commande.total }}€</div>
            <div>Statut : {{ commande.state }}</div>
            <br>
            Produits :
            <br>
            <div style="max-height: 300px; overflow-y: auto; overflow-x: hidden">
              <div style="display: grid; grid-template-columns: 120px 120px; align-items: center;"
                v-for="produit in commande.products" :key="produit.id">
                {{ produit.name }}
                <select class="input-status" :class="produit.state === 'En attente' ? 'wait' : (produit.state === 'En cours' ? 'loading' : (produit.state === 'Terminé' ?'end' : 'wait'))" id="state" @change="editProductState(commande.id, produit, $event)">
                  <option :selected="produit.state === 'En attente' ? true : false" value="En attente">En attente</option>
                  <option :selected="produit.state === 'En cours' ? true : false" value="En cours">En cours</option>
                  <option :selected="produit.state === 'Terminé' ? true : false" value="Terminé">Terminé</option>
                </select>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>
