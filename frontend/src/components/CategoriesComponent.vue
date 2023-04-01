<script lang="ts" src="../services/ts/CategoriesComponent.ts"></script>
<template>
  <div class="content">
    <table id="header-categorie">
      <tr>
        <th><h3>Catégories</h3></th>
        <th><h3>Sous-catégories</h3></th>
      </tr>
    </table>
    <div id="content-categorie">
    <table>
      <tr> <!-- v for category -->
        <td>
          <button class="category-button" @click="updateCatgory()"> <!-- metter category dans la fonction -->
            Cat1
          </button>
        </td>
        <td>
          <button class="category-button" @click="updateSubcategory('subcategoryModal')">
            <div><!-- v for subcategory -->
              SScat 1, ss cat 2
            </div>
          </button>
        </td>
      </tr>
    </table>
    </div>
  </div>
  <SubcategoryModalComponent @delete-subcategory="deleteObjet" :category="isCategory"/>
  <SimpleModalComponent :objet="deleteObj" :type="type" :del="del" :buttons="buttons" :message="message"/>
</template>
