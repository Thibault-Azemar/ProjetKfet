<script lang="ts" src="../services/ts/CommandeListComponent.ts"></script>

<template>
  <div class="page">
    <div class="commandes-grid">
      <h3>Client</h3>
      <h3>Heure</h3>
      <h3>Prix</h3>
      <h3>Statut</h3>
      <h3 class="ordinateur">Produit</h3>
    </div>

    <div class="content-commande">
      <button v-for="commande in commandes" :key="commande.id" :id="commande.id" class="commandes-grid  command-button"
        @click="editCommand(commande)">
        <p>{{ commande.name }}</p>
        <p>{{ commande.date.getHours() < 10 ? '0' + commande.date.getHours() : commande.date.getHours() }}:{{
          commande.date.getMinutes() < 10 ? '0' + commande.date.getMinutes() : commande.date.getMinutes() }}</p>
            <p>{{ commande.total }}</p>
            <p :class="commande.state === 'En attente' ? 'wait' : (commande.state === 'En cours' ? 'loading' : (commande.state === 'Terminée' ?'end' : ''))">{{ commande.state }}</p>
            <div class="ordinateur flex-row">
              <p v-for="produit in commande.products" :key="produit.id">{{ produit.name }},</p>
            </div>
      </button>
    </div>
    <EditCommandModalComponent :commande="isCommande" />
  </div>
</template>
