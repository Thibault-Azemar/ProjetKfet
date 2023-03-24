
<template>
  <h1> ceci est un h1 </h1>
  <h2> ceci est un h2 </h2>
  <h3> ceci est un h3 </h3>
  <button class="primary-button">Valider</button>
  <button class="secondary-button">Annuler</button>
  <button class="tertiary-button"></button>
  <button class="delete-button">Supprimer</button>
  <input type="text" class="search">
  <label>Choose a pet:</label>
  <select name="pets" id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
    <div id="QRCodeImg" ></div>
  </select>
  <div>
    <button class="secondary-button icon-minus minus-button" @click="minus('test')"></button>
    <input class="quantity-input" type="number" id="test">
    <button class="secondary-button icon-plus plus-button" @click="plus('test')"></button>
  </div>
  <button class="icon-button"><img src="../assets/pictures/user.svg"></button>
</template>

<script>
import test from '../services/test'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  data() {
    return {
      test
    }
  },
  methods: {
    plus(id) {
      let value = document.getElementById(id).value
      value++
      document.getElementById(id).value = value
    },
    minus(id) {
      let value = document.getElementById(id).value
      value--
      document.getElementById(id).value = value
    }
  },
  created() {
  }
}


</script>
