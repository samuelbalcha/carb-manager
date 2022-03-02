import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "./../../src/components/PremiumRecipeCard.vue";
import HeartIcon from "./../../src/components/icons/HeartIcon.vue";
import TrophyIcon from "./../../src/components/icons/TrophyIcon.vue";
import NutrientsBadge from "./../../src/components/NutrientsBadge.vue";
import TimeToCookAndEnergyBadge from "./../../src/components/TimeToCookAndEnergyBadge.vue";

import { recipe } from "./../helpers/recipes";

describe("PremiumRecipeCard.vue", () => {
  const wrapper = mount(PremiumRecipeCard, {
    propsData: {
      recipe: recipe
    }
  });

  it("should render recipe image", () => {
    expect(wrapper.html()).toContain(recipe.images[0].url);
  });

  it("should render heart icon with white stroke ", () => {
    const heartIcon = wrapper.findComponent(HeartIcon);
    expect(heartIcon).not.toBeNull();
    expect(heartIcon.html()).toContain('stroke="white"');
  });

  it("should render heart icon with green fill when card is clicked ", async () => {
    await wrapper.trigger("click");

    const heartIcon = wrapper.findComponent(HeartIcon);
    expect(heartIcon).not.toBeNull();
    expect(heartIcon.html()).toContain('fill="#1BC98E"');
  });

  it("should render premium recipe caption", () => {
    const trophyIcon = wrapper.findComponent(TrophyIcon);
    expect(trophyIcon).not.toBeNull();
  });

  it("should render recipe title", () => {
    expect(wrapper.html()).toContain(recipe.title);
  });

  it("should render rating score", () => {
    expect(wrapper.html()).toContain(recipe.rating.score);
  });

  it("should render rating count", () => {
    expect(wrapper.html()).toContain(recipe.rating.count);
    expect(wrapper.html()).toContain("ratings");
  });

  it("should render NutrientsBadge elements", () => {
    const nutrientsBadge = wrapper.findComponent(NutrientsBadge);

    expect(nutrientsBadge).not.toBeNull();
    expect(wrapper.html()).toContain("min");
  });

  it("should render TimeToCookAndEnergyBadge elements", () => {
    const timeToCookAndEnergyBadge = wrapper.findComponent(
      TimeToCookAndEnergyBadge
    );

    expect(timeToCookAndEnergyBadge).not.toBeNull();
  });
});
