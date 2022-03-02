import { mount } from "@vue/test-utils";
import MacroDotIcon from "./../../src/components/icons/MacroDotIcon.vue";

describe("MacroDotIcon.vue", () => {
  it("should render carbs dot (#F94642)", () => {
    const wrapper = mount(MacroDotIcon, {});
    expect(wrapper.html()).toContain("#F94642");
  });

  it("should render proteins dot (#3177BB) when nutrientType is protiens ", () => {
    const wrapper = mount(MacroDotIcon, {
      propsData: {
        nutrientType: "proteins"
      }
    });
    expect(wrapper.html()).toContain("#3177BB");
  });

  it("should render fats dot (#FDA120) when nutrientType is fats ", () => {
    const wrapper = mount(MacroDotIcon, {
      propsData: {
        nutrientType: "fats"
      }
    });
    expect(wrapper.html()).toContain("#FDA120");
  });
});
