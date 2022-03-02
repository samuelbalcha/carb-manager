<template>
  <div>
    <span>
      <ClockIcon />
    </span>
    <span class="text-holder"> {{ toHrMin(preparationTime) }} </span>
    <span>
      <EnergyIcon />
    </span>
    <span class="text-holder">
      {{ getEnergy(energy) }} {{ userSelectedUnit }}
    </span>
  </div>
</template>

<script>
import ClockIcon from "./icons/ClockIcon.vue";
import EnergyIcon from "./icons/EnergyIcon.vue";
import { toHrMin, kJoulesToCalories, kcalTokJoules } from "./../utils/utils";

export default {
  name: "TimeToCookAndEnergyBadge",
  props: {
    preparationTime: {
      type: Number,
      required: true
    },
    energy: {
      type: Number,
      required: true
    },
    energyUnit: {
      type: String,
      default: ""
    },
    userSelectedUnit: {
      type: String,
      default: "calories"
    }
  },
  components: {
    ClockIcon,
    EnergyIcon
  },
  methods: {
    toHrMin: function(timeInMinutes) {
      return toHrMin(timeInMinutes);
    },

    getEnergy: function(energy) {
      if (this.energyUnit === "kcal" && this.userSelectedUnit === "calories") {
        return energy;
      }
      if (this.energyUnit === this.userSelectedUnit) {
        return energy;
      } else if (
        this.energyUnit === "kJ" &&
        this.userSelectedUnit === "calories"
      ) {
        return kJoulesToCalories(energy);
      } else {
        return kcalTokJoules(energy);
      }
    }
  }
};
</script>

<style scoped>
div {
  display: inline-flex;
}
</style>
