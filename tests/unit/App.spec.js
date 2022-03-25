import { mount } from "@vue/test-utils";
import App from "./../../src/App.vue";
import PremiumRecipeCard from "./../../src/components/PremiumRecipeCard.vue";
import { recipe } from "./../helpers/recipes";

describe("App.vue", () => {
  it("should render no recipe found element when there are no premium recipies", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([])
      })
    );

    const wrapper = mount(App, {});
    expect(wrapper.html()).toContain(
      "Oops.. something went wrong. Try again please"
    );
  });

  it("should render no recipe found element when fetch api throws error", () => {
    global.fetch = jest.fn(() => Promise.reject("server error"));

    const wrapper = mount(App, {});
    expect(wrapper.html()).toContain(
      "Oops.. something went wrong. Try again please"
    );
  });

  it("should render recipes when premium recipes are found", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([recipe])
      })
    );

    const wrapper = mount(App, {});
    const premiumRecipeCard = wrapper.findComponent(PremiumRecipeCard);
    expect(premiumRecipeCard).not.toBeNull();
  });
});
