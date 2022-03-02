import { mount } from "@vue/test-utils";
import TimeToCookAndEnergyBadge from "./../../src/components/TimeToCookAndEnergyBadge.vue";
import ClockIcon from "./../../src/components/icons/ClockIcon.vue";

describe("TimeToCookAndEnergyBadge.vue", () => {
  const propsData = {
    preparationTime: 25,
    energy: 200,
    energyUnit: "kJ",
    userSelectedUnit: "calories"
  };

  it("should render clock icon", () => {
    const wrapper = mount(TimeToCookAndEnergyBadge, {
      propsData: propsData
    });

    const clockIcon = wrapper.findComponent(ClockIcon);
    expect(clockIcon.html()).not.toBeNull();
  });

  it("should render 25 min when preparationTime is 25", () => {
    const wrapper = mount(TimeToCookAndEnergyBadge, {
      propsData: propsData
    });

    expect(wrapper.html()).toContain("25 min");
  });

  it("should render 1 hr 0 min when preparationTime is 60", () => {
    const wrapper = mount(TimeToCookAndEnergyBadge, {
      propsData: {
        ...propsData,
        preparationTime: 60
      }
    });

    expect(wrapper.html()).toContain("1 hr 0 min");
  });

  it(`should render energy in calories 
  when energy unit is kJ and user selected unit is calories`, () => {
    const wrapper = mount(TimeToCookAndEnergyBadge, {
      propsData: propsData
    });

    expect(wrapper.html()).toContain("47.80 calories");
  });

  it(`should render energy in kJ
  when energy unit is kcal and user selected unit is kJ`, () => {
    const wrapper = mount(TimeToCookAndEnergyBadge, {
      propsData: {
        ...propsData,
        energyUnit: "kcal",
        userSelectedUnit: "kJ"
      }
    });

    expect(wrapper.html()).toContain("836.82 kJ");
  });
});
