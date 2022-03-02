<template>
  <div class="premium-recipe-wrapper">
    <div class="premium-recipe-cover-img">
      <img :src="recipe.images[0].url" />
      <svg
        name="heart"
        class="heart"
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9 1C16.7871 1.00014 15.6956 1.30496 14.7437 1.8814C13.7917 2.45785 13.0158 3.28391 12.5 4.27C11.8662 3.06378 10.8469 2.10448 9.60443 1.54506C8.36198 0.985631 6.96801 0.858295 5.64477 1.18335C4.32154 1.50841 3.14523 2.26714 2.30341 3.33857C1.46159 4.41 1.00273 5.73243 1 7.095C1 10.46 3.09 13.535 5.79 16.06C7.87296 17.9058 10.1188 19.5593 12.5 21C14.8633 19.5327 17.107 17.8809 19.21 16.06C22.21 13.32 24 10.46 24 7.095C24 6.29417 23.8422 5.5012 23.5356 4.76139C23.229 4.02159 22.7796 3.34946 22.213 2.78342C21.6465 2.21738 20.974 1.76853 20.234 1.46252C19.4939 1.15651 18.7008 0.999345 17.9 1V1Z"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
        />
      </svg>

      <div class="premium-caption-container">
        <svg
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.36469 1.37464V0.394989H0V0.884815C0 4.08309 2.67371 6.64559 5.9895 6.64559H6.23948V5.66594H5.9895C3.37953 5.66594 1.2599 3.79074 1.00524 1.37464H2.36469Z"
            fill="white"
          />
        </svg>

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

      <span> {{ recipe.rating.count }} ratings </span>
    </div>
    <div>
      <div class="flex">
        <span>
          <svg
            name="clock"
            width="5"
            height="7"
            viewBox="0 0 5 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.33331 0.333344V6.33334H0.333313"
              stroke="#6F737A"
              stroke-width="1.2"
              stroke-miterlimit="10"
            />
          </svg>

          {{ recipe.preparationTime }} min
        </span>
        <span>
          <svg
            name="energy"
            width="12"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.26713 0.224121C7.00312 -0.0166337 6.62823 -0.069464 6.31142 0.0950646C5.98632 0.262612 5.80679 0.608273 5.85205 0.975066C6.04515 2.51318 5.62651 4.09809 4.73417 5.21356C4.66854 5.29507 4.61801 5.34489 4.58255 5.37357C4.53126 5.29734 4.44376 5.123 4.33212 4.73281C4.20691 4.30036 4.20238 3.63771 4.20238 3.63092C4.20163 3.44149 4.08396 3.27243 3.90594 3.20752C3.72868 3.14111 3.52954 3.19394 3.40659 3.33809C3.35153 3.40149 2.07675 4.89809 1.67546 5.51394C0.103485 7.92753 -0.355887 10.074 0.270187 12.0747C1.00186 14.4121 3.28816 16 5.87996 16C5.95841 16 6.03761 15.9985 6.11681 15.9955C8.98921 15.8883 11.3547 13.8272 11.8699 10.9819C12.5058 7.46036 10.7852 3.43847 7.26713 0.224121ZM10.9783 10.8211C10.5401 13.2438 8.52682 15 6.08287 15.0906C3.79657 15.1826 1.76598 13.8241 1.13311 11.8045C0.59303 10.077 1.01846 8.18112 2.43429 6.00828C2.61985 5.723 3.03623 5.20149 3.40584 4.75092C3.42168 4.83017 3.44053 4.90866 3.46165 4.98338C3.62157 5.54036 3.83126 6.07998 4.27178 6.25809C4.5388 6.36753 4.96348 6.37357 5.4402 5.7796C6.47284 4.48903 6.95334 2.75167 6.76551 0.99318C9.97961 3.97885 11.5531 7.643 10.9783 10.8211Z"
              fill="#6F737A"
            />
          </svg>
          {{ recipe.energy }} Calories
        </span>

        <span>
          <svg
            name="carbs"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
              fill="#F94642"
            />
          </svg>
          {{ recipe.nutrients.carbs }} g
        </span>

        <span>
          <svg
            name="proteins"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
              fill="#3177BB"
            />
          </svg>

          {{ recipe.nutrients.proteins }} g
        </span>

        <span>
          <svg
            name="fats"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z"
              fill="#FDA120"
            />
          </svg>

          {{ recipe.nutrients.fats }} g
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      nutrients: {
        proteins: Number,
        carbs: Number,
        fats: Number
      }
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
  padding-left: 5px;
}

.flex {
  display: inline-flex;
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
}

.heart {
  position: absolute;
  top: 8px;
  right: 16px;
}
</style>
