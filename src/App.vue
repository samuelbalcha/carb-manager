<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="cm-list-container">
        <PremiumRecipeCard
          v-for="premiumRecipe in premiumRecipes"
          :key="premiumRecipe.id"
          v-bind:recipe="premiumRecipe"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
const API_URL = "http://localhost:3000/recipes";

export default {
  name: "App",

  components: {
    PremiumRecipeCard
  },

  data: () => ({
    premiumRecipes: []
  }),

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        const filtered = result.filter(recipe => recipe.isPremium);

        this.premiumRecipes = filtered.map(recipe => {
          return {
            id: recipe.id,
            title: recipe.title,
            images: recipe.images,
            rating: recipe.rating,
            preparationTime: recipe.preparationTimeMinutes,
            energy: recipe.details.energy,
            nutrients: recipe.details.nutrients
          };
        });
      });
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

.cm-list-container {
  text-align: center;
}
</style>
