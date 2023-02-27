<template>
  <div class="snackbar snack-fail" id="error" >
    <img src="../assets/pictures/fail.svg" alt="" />
    <p>{{ message }}</p>
  </div>


  <div class="snackbar snack-warning" id="warning">
    <img src="../assets/pictures/warning.svg" alt="" />
    <p>{{ message }}</p>
  </div>



  <div class="snackbar snack-success" id="success">
    <img src="../assets/pictures/success.svg" alt="" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "SnackBarComponent"
}
</script>

<style scoped>

</style>