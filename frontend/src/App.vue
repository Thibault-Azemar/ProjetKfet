<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1>Test</h1>
  <test></test>-->
  <router-view/>
  <MenuComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from './components/HelloWorld.vue';
//import test from './components/test.vue';
//import MenuComponent from "./services/MenuComponent";
import MenuComponent from './components/MenuComponent.vue'
//import MenuComponent from './services/MenuComponent'


export default defineComponent({
  components:{
    MenuComponent,
    //HelloWorld,
    //test
  },
  beforeMount() {
    const app = document.getElementById("app")
    if(app){
      app.addEventListener("click", () => {
        const accountPopup = document.getElementById("account-popup")
        if(accountPopup){
          accountPopup.style.display = "none"
        }
      })
      }
    }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
