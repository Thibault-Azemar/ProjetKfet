<script lang="ts" src="../services/ts/GroupModalComponent.ts"></script>

<template>
  <div class="modal" id="groupModal">
    <div class="card">
      <header>
        <h3>Gestion des groupes</h3>
        <button class="icon-button close-button" @click="unshowModal('groupModal')"></button>
      </header>
      <div class="content-group">
        <div class="group-grid"> <!-- v for groups -->
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
          <p>Nom groupe</p>
          <button class="icon-button little-icon" @click="showEditModal(group)"><img src="../assets/pictures/pen.svg"></button>
          <button class="icon-button little-icon" @click="deleteGroup(group)"><img src="../assets/pictures/trash.svg"></button>
        </div>
      </div>
      <div style="display:flex; justify-content: center">
        <button class="primary-button" id="creer-group" @click="showEditModal()">Créer un groupe</button>
      </div>
    </div>
  </div>
  <div class="modal" id="groupEditModal">
    <div class="card">
      <header>
        <h3 v-if="isGroup">Modifer le groupe</h3>
        <h3 v-if="!isGroup">Créer un groupe</h3>
        <button class="icon-button close-button" @click="unshowModal('groupEditModal')"></button>
      </header>
      <form>
        <label for="nom">Nom du groupe</label>
        <input type="text" id="nom" :value="isGroup ? isGroup.name : ''" placeholder="Entrer le nom du groupe">
        <div class="submit-button">
          <input class="primary-button" id="creer-produit" :value="isGroup ? 'Modifier le groupe' : 'Créer un groupe'"
                 @click="isGroup ? editGroup(isGroup) : addGroup()">
        </div>
      </form>
    </div>
  </div>
</template>
