import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "./../../src/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  const recipe = {
    id: "1",
    title: "Keto Italian Beef With Cabbage Noodles",
    images: [
      {
        id: 1,
        url:
          "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
      }
    ],
    rating: {
      count: 100,
      score: 3.5
    },
    preparationTime: 25,
    energy: 450,
    nutrients: {
      proteins: 20,
      carbs: 10,
      fats: 30
    }
  };

  const wrapper = mount(PremiumRecipeCard, {
    propsData: {
      recipe: recipe
    }
  });

  it("should be a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should render recipe image", () => {
    expect(wrapper.html()).toContain(recipe.images[0].url);
  });

  it("should render heart svg", () => {
    expect(wrapper.html()).toContain("heart");
  });

  it("should render premium recipe caption", () => {
    expect(wrapper.html()).toContain(" Premium Recipe");
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

  it("should render clock element", () => {
    expect(wrapper.html()).toContain("clock");
    expect(wrapper.html()).toContain("min");
  });

  it("should render energy element", () => {
    expect(wrapper.html()).toContain("energy");
    expect(wrapper.html()).toContain("Calories");
  });

  it("should render carbs elements", () => {
    expect(wrapper.html()).toContain("carbs");
    expect(wrapper.html()).toContain(recipe.nutrients.carbs);
  });

  it("should render proteins elements", () => {
    expect(wrapper.html()).toContain("proteins");
    expect(wrapper.html()).toContain(recipe.nutrients.proteins);
  });

  it("should render fats elements", () => {
    expect(wrapper.html()).toContain("fats");
    expect(wrapper.html()).toContain(recipe.nutrients.fats);
  });
});
