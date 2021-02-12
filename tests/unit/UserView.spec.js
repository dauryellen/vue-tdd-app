import { shallowMount } from "@vue/test-utils";
import UserView from "../../src/views/UserView.vue";
import VUserSearchForm from "../../src/components/VUserSearchForm";
import VUserProfile from "../../src/components/VUserProfile";

describe("UserView", () => {
  it("renders the component", () => {
    //arrange
    const wrapper = shallowMount(UserView);

    //assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    //arrange
    const wrapper = shallowMount(UserView);
    const userSearchForm = wrapper.findComponent(VUserSearchForm);
    const userProfile = wrapper.findComponent(VUserProfile);

    //assert
    expect(userSearchForm.exists()).toBe(true);
    expect(userProfile.exists()).toBe(true);
  });
});
