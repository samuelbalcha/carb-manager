<template>
  <fieldset>
    <FullStarIcon
      v-for="index in fullStars"
      :key="index"
      type="radio"
      :id="index"
    />
    <HalfStarIcon v-if="halfStar > 0" type="radio" />
    <EmptyStarIcon
      v-for="i in emptyStars"
      :key="`empty-${i}`"
      type="radio"
      :id="index"
    />
  </fieldset>
</template>

<script>
import FullStarIcon from "./icons/FullStarIcon.vue";
import HalfStarIcon from "./icons/HalfStarIcon.vue";
import EmptyStarIcon from "./icons/EmptyStarIcon.vue";

export default {
  name: "StarRatings",
  props: {
    score: Number
  },
  data: () => ({
    fullStars: 0,
    halfStar: 0,
    emptyStars: 5
  }),
  mounted() {
    this.fullStars = Math.floor(this.score);
    this.halfStar = this.score - this.fullStars;
    this.emptyStars = 5 - Math.ceil(this.score);
  },
  components: {
    FullStarIcon,
    HalfStarIcon,
    EmptyStarIcon
  }
};
</script>

<style scoped>
fieldset {
  display: inline-block;
  border: 0;
  margin-left: 0px;
  padding-left: 0px;
}
</style>
