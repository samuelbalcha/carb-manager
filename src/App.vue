<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="cm-list-container">
        <div v-if="premiumRecipes.length">
          <PremiumRecipeCard
            v-for="premiumRecipe in premiumRecipes"
            :key="premiumRecipe.id"
            v-bind:recipe="premiumRecipe"
            v-bind:userSelectedEnergyUnit="userProfile.energyUnits"
          />
        </div>
        <div class="no-recipe-found" v-else>
          Oops.. something went wrong. Try again please
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";
const BASE_URL = "http://localhost:3000";

export default {
  name: "App",

  components: {
    PremiumRecipeCard
  },

  data: () => ({
    premiumRecipes: [],
    userProfile: {
      firstName: "",
      lastName: "",
      energyUnits: ""
    }
  }),

  mounted() {
    this.getPremiumRecipes();
    this.getProfile();
  },
  methods: {
    getPremiumRecipes() {
      fetch(`${BASE_URL}/recipes`)
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
              energyUnit: recipe.details.units.energy,
              nutrients: recipe.details.nutrients
            };
          });
        })
        .catch(err => {
          console.error(`getPremiumRecipes error: ${err}`);
          this.premiumRecipes = [];
        });
    },
    getProfile() {
      fetch(`${BASE_URL}/user`)
        .then(response => response.json())
        .then(result => {
          this.userProfile = result;
        })
        .catch(err => {
          console.error(`getProfile error: ${err}`);
          this.userProfile = {};
        });
    }
  }
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

<style>
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

span {
  display: inline-block;
}

.text-holder {
  line-height: 20px;
  font-size: 12px;
  margin-left: 5px;
  margin-right: 5px;
}

svg {
  margin-left: 5px;
}
</style>
