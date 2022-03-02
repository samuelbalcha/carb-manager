<template>
  <div class="premium-recipe-wrapper" v-on:click="onCardClick()">
    <div class="premium-recipe-cover-img">
      <img :src="recipe.images[0].url" />

      <HeartIcon :isFilled="isCardClicked" />

      <div class="premium-caption-container">
        <TrophyIcon />
        <span class="caption"> Premium Recipe </span>
      </div>
    </div>

    <div class="premium-recipe-title">
      {{ recipe.title }}
    </div>
    <div class="flex">
      <fieldset class="rate">
        <svg
          :name="recipe.rating.score"
          v-for="index in Math.round(recipe.rating.score)"
          :key="index"
          type="radio"
          :id="index"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.92307 9.64421L9.58352 12L8.61214 7.56L11.8461 4.57263L7.58745 4.18737L5.92307 0L4.25868 4.18737L0 4.57263L3.23399 7.56L2.26261 12L5.92307 9.64421Z"
            fill="#FDA01E"
          />
        </svg>
      </fieldset>

      <span class="rating-text"> {{ recipe.rating.count }} ratings </span>
    </div>
    <div class="flex">
      <TimeToCookAndEnergyBadge
        :preparationTime="recipe.preparationTime"
        :energy="recipe.energy"
        :energyUnit="recipe.energyUnit"
        :userSelectedUnit="userSelectedEnergyUnit"
      />

      <NutrientsBadge
        :proteins="recipe.nutrients.proteins"
        :fats="recipe.nutrients.fats"
        :carbs="recipe.nutrients.carbs"
      />
    </div>
  </div>
</template>

<script>
import HeartIcon from "./icons/HeartIcon.vue";
import TrophyIcon from "./icons/TrophyIcon.vue";
import NutrientsBadge from "./NutrientsBadge.vue";
import TimeToCookAndEnergyBadge from "./TimeToCookAndEnergyBadge.vue";

export default {
  name: "PremiumRecipeCard",
  props: {
    recipe: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      images: [
        {
          id: String,
          url: String
        }
      ],
      rating: {
        count: Number,
        score: Number
      },
      preparationTime: Number,
      energy: Number,
      energyUnit: String,
      nutrients: {
        proteins: Number,
        carbs: Number,
        fats: Number
      }
    },
    userSelectedEnergyUnit: String,
    isCardClicked: Boolean
  },
  components: {
    HeartIcon,
    TrophyIcon,
    NutrientsBadge,
    TimeToCookAndEnergyBadge
  },
  methods: {
    onCardClick: function() {
      this.isCardClicked = !this.isCardClicked;
    }
  }
};
</script>

<style scoped>
.premium-recipe-wrapper {
  width: 343px;
  height: 318px;
  background: #ffffff;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  border-radius: 12px;
  cursor: pointer;
  margin-top: 24px;
}

.premium-recipe-cover-img {
  position: relative;
  text-align: center;
}

.premium-recipe-cover-img:hover {
  background: #ffffff;
  opacity: 0.2;
}

img {
  width: 100%;
  height: 200px;
}

.premium-recipe-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
  color: #0c0c0a;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 15px;
}

.flex {
  display: inline-flex;
  width: 100%;
  padding-left: 10px;
}

.premium-caption-container {
  position: absolute;
  font-style: normal;
  bottom: 12px;
  left: 5px;
  width: 117px;
  height: 20px;
  background: #ffffff;
  opacity: 0.3;
  border-radius: 10px;
}

.caption {
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #ffffff;
}

.rate {
  display: inline-block;
  border: 0;
  margin-left: 0px;
  padding-left: 0px;
}

.heart {
  position: absolute;
  top: 8px;
  right: 16px;
}

.heart > svg:hover {
  fill: "#1BC98E";
}

.rating-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: #1ca677;
}
</style>
