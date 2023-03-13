<script lang="ts" src="../services/ts/UserModalComponent.ts"></script>
<template>
  <div class="modal" id="userModal">
    <div class="card">
      <header>
        <h3>Créer un nouvel utilisateur</h3>
        <button class="icon-button close-button" @click="unshowModal('userModal')"></button>
      </header>
      <form method="post">
        <div>
          <label class="input-label" for="nom-user">Nom</label>
          <input name="nom-user" class="input-field" type="text" :value="user.name" placeholder="nom de l'utilisateur" id="nom-user"
                 required>
        </div>
        <div>
          <label class="input-label" for="prenom-user">Prénom</label>
          <input name="prenom-user" class="input-field" type="text" :value="user.firstname" placeholder="prénom de l'utilisateur"
                 id="prenom-user" required>
        </div>
        <div>
          <label class="input-label" for="email-user">Email</label>
          <input name="email-user" class="input-field" type="text" :value="user.email" placeholder="...@gmail.com"
                 id="email-user" required>
        </div>
        <div>
          <label class="input-label" for="role-user">Rôle</label>
          <select name="role-user" class="input-field"
                  id="role-user" required>
            <option value="" v-if="!user" selected>Choisir sous-catégorie</option>
            <option value="admin" >Administrateur</option>
            <option value="kfetier">Kfetier</option>
          </select>
        </div>
        <div v-if="!user">
          <label class="input-label" for="password-user">Mot de Passe</label>
          <input type="password" name="password-user" id="password-user" required>
        </div>
        <div class="submit-button">
          <input type="submit" class="primary-button" id="creer-utilisateur" value="Créer utilisateur">
        </div>
      </form>
    </div>
  </div>
</template>
