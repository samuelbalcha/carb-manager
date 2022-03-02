<template>
  <div>
    <span>
      <ClockIcon />
    </span>
    <span class="text-holder"> {{ preparationTime }} min </span>
    <span>
      <EnergyIcon />
    </span>
    <span class="text-holder"> {{ energy }} Calories </span>
  </div>
</template>

<script>
import ClockIcon from "./icons/ClockIcon.vue";
import EnergyIcon from "./icons/EnergyIcon.vue";

export default {
  name: "TimeToCookAndEnergyBadge",
  props: {
    preparationTime: Number,
    energy: Number
  },
  components: {
    ClockIcon,
    EnergyIcon
  }
};
</script>

<style scoped>
div {
  display: inline-flex;
}
</style>
