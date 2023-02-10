<template>
  <h1> {{ test }}</h1>
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
      getTest(){
          test.getTest().then((response) =>{
            this.datatest = response.data
          });
      }

    },
    created(){
        this.getTest()
    }
  }

</script>
