<script lang="ts" src="../services/ts/CategoriesComponent.ts"></script>
<template>
  <div class="content">
    <table id="header-categorie">
      <tr>
        <th>
          <h3>Catégories</h3>
        </th>
        <th>
          <h3>Sous-catégories</h3>
        </th>
      </tr>
    </table>
    <div id="content-categorie">
      <table>
        <tr v-for="category in categories" :key="category"> <!-- v for category -->
          <td>
            <button class="category-button" @click="updateCategory(category)"> <!-- metter category dans la fonction -->
              {{ category.name }}
            </button>
          </td>
          <td>
            <button class="category-button" @click="updateSubcategory(category)">
              <div v-for="subcategory in category.subcategories" :key="subcategory"><!-- v for subcategory -->
                {{ subcategory.name }}
              </div>
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <SubcategoryModalComponent @delete-subcategory="deleteObjet" :category="isCategory" />
  <SimpleModalComponent :objet="deleteObj" :type="type" :del="del" :buttons="buttons" :message="message" />
</template>
