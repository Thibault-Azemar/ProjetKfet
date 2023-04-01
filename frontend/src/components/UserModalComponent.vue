<script lang="ts" src="../services/ts/UserModalComponent.ts"></script>
<template>
  <div class="modal" id="userModal">
    <div class="card">
      <header>
        <h3 v-if="!user">Créer un nouvel utilisateur</h3>
        <h3 v-if="user">Modifier un utilisateur</h3>
        <button class="icon-button close-button" @click="unshowModal('userModal')"></button>
      </header>
      <div class="form">

        <label class="input-label" for="nom-user">Nom</label>
        <input name="nom-user" class="input-field" type="text" :value="user ? user.name : ''"
          placeholder="nom de l'utilisateur" id="nom-user" required>

        <label class="input-label" for="prenom-user">Prénom</label>
        <input name="prenom-user" class="input-field" type="text" :value="user ? user.firstname : ''"
          placeholder="prénom de l'utilisateur" id="prenom-user" required>

        <label class="input-label" for="email-user">Email</label>
        <input name="email-user" class="input-field" type="text" :value="user ? user.email : ''"
          placeholder="...@gmail.com" id="email-user" required>

        <label class="input-label" for="role-user">Rôle</label>
        <select name="role-user" class="input-field" id="role-user" required>
          <option value="" v-if="!user" selected disabled>Choisir sous-catégorie</option>
          <option value="admin" :selected="user ? user.role === 'admin' : false">Administrateur</option>
          <option value="kfetier" :selected="user ? user.role === 'kfetier' : false">Kfetier</option>
        </select>

        <label v-if="!user" class="input-label" for="password-user">Mot de Passe</label>
        <input v-if="!user" type="password" name="password-user" id="password-user" required>

        <div class="submit-button">
          <button class="primary-button" id="creer-user" @click="user ? editUser(user) : addUser()">
            {{ user ? 'Modifier Utilisateur' : 'Créer Utilisateur' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
