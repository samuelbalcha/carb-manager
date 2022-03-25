<template>
  <div>
    <span>
      <MacroDotIcon />
    </span>
    <span class="text-holder"> {{ carbs }}g </span>

    <span>
      <MacroDotIcon :nutrientType="'proteins'" />
    </span>
    <span class="text-holder"> {{ proteins }}g </span>
    <span>
      <MacroDotIcon :nutrientType="'fats'" />
    </span>
    <span class="text-holder"> {{ fats }}g </span>
  </div>
</template>

<script>
import MacroDotIcon from "./icons/MacroDotIcon.vue";

export default {
  name: "NutrientsBadge",
  props: {
    proteins: Number,
    carbs: Number,
    fats: Number
  },
  components: {
    MacroDotIcon
  }
};
</script>

<style scoped>
div {
  display: inline-flex;
}
</style>
