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
  </select>
</template>

<script>
import test from '../services/test'
  export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Test',
    data(){
      return{
        test
      }
    },
    methods: {


    },
    created(){
    }
  }

</script>
