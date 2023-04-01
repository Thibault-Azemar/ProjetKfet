<template>
  <router-view/>
  <MenuComponent/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuComponent from './components/MenuComponent.vue'


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
