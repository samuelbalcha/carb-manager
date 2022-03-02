import { mount } from "@vue/test-utils";
import HeartIcon from "./../../src/components/icons/HeartIcon.vue";

describe("HeartIcon.vue", () => {
  it("should render heart icon with white stroke", () => {
    const wrapper = mount(HeartIcon, {});
    expect(wrapper.html()).toContain('stroke="white"');
  });

  it("should render heart icon with fill (#1BC98E)", () => {
    const wrapper = mount(HeartIcon, { propsData: { isFilled: true } });
    expect(wrapper.html()).toContain('fill="#1BC98E"');
  });
});
