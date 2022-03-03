import { mount } from "@vue/test-utils";
import StarRatings from "./../../src/components/StarRatings.vue";
import FullStarIcon from "./../../src/components/icons/FullStarIcon.vue";
import HalfStarIcon from "./../../src/components/icons/HalfStarIcon.vue";
import EmptyStarIcon from "./../../src/components/icons/EmptyStarIcon.vue";

describe.skip("StarRating.vue", () => {
  it("should render full star icon when score is 5", () => {
    const wrapper = mount(StarRatings, {
      propsData: { score: 5 }
    });

    const fullStar = wrapper.findComponent(FullStarIcon);
    expect(fullStar.html()).not.toBeNull();
  });

  it("should render half star icon when score is 0.5", () => {
    const wrapper = mount(StarRatings, {
      propsData: { score: 0.5 }
    });

    const halfStarIcon = wrapper.findComponent(HalfStarIcon);
    expect(halfStarIcon.html()).not.toBeNull();
  });

  it("should render empty star icon when score is 0", () => {
    const wrapper = mount(StarRatings, {
      propsData: { score: 0 }
    });

    const emptyStarIcon = wrapper.findComponent(EmptyStarIcon);
    expect(emptyStarIcon.html()).not.toBeNull();
  });
});
