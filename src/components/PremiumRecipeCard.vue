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
      <StarRatings :score="recipe.rating.score" />

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
        class="nutrients-badge"
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
import StarRatings from "./StarRatings.vue";

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
    TimeToCookAndEnergyBadge,
    StarRatings
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
  background: rgba(156, 141, 141, 0.8);
  opacity: 0.3;
  border-radius: 10px;
  margin-left: 5px;
}

.caption {
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #ffffff;
  display: inline-block;
  margin-left: 5px;
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

.nutrients-badge {
  margin-left: 15px;
}
</style>
