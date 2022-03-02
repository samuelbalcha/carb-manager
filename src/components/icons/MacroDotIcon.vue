<template>
  <svg
    name="macrodot"
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-if="nutrientType === 'proteins'"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
      fill="#3177BB"
    />
    <path
      v-else-if="nutrientType === 'fats'"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
      fill="#FDA120"
    />
    <path
      v-else
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
      fill="#F94642"
    />
  </svg>
</template>

<script>
export default {
  name: "MacroDotIcon",
  props: {
    nutrientType: {
      type: String,
      default: "carbs"
    }
  }
};
</script>
