<script lang="ts" src="../services/ts/CategoriesComponent.ts"></script>
<template>
  <div class="content">
    <table id="header-categorie">
      <tr>
        <th><h3>Catégories</h3></th>
        <th><h3>Sous-catégories</h3></th>
      </tr>
    </table>
     <!-- <tr v-for="category in categories" :key="category" :id="category.id">
        <td>
          category.name
        </td>
        <td>
          <div v-for="subcategory in category.subcategories" :key="subcategory" :id="subcategory.id">
            <h3>{{ subcategory.name }}</h3>
            <button class="icon-button" @click="updateSubcategory(subcategory)"><img src="../assets/pictures/pen.svg"></button>
            <button class="icon-button" @click="deleteSubcategory(subcategory)"><img src="../assets/pictures/trash.svg"></button>
          </div>
        </td>
      </tr>-->
    <div id="content-categorie">
    <table>
      <tr> <!-- v for category -->
        <td>
          <button class="category-button" @click="showModal('categoryModal')">
            Cat1
          </button>
        </td>
        <td>
          <button class="category-button" @click="showModal('subcategoryModal')">
            <div><!-- v for subcategory -->
              SScat 1, ss cat 2
            </div>
          </button>
        </td>
      </tr>
    </table>
    </div>
  </div>
  <CategoryModalComponent @delete-category="deleteObjet" :category="isCategory"/>
  <SubcategoryModalComponent @delete-subcategory="deleteObjet" :category="isCategory"/>
  <SimpleModalComponent :objet="deleteObj" :type="type" :del="del" :buttons="buttons" :message="message"/>
</template>
