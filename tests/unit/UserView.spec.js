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
    const userSearchForm = wrapper.find(VUserSearchForm);
    const userProfile = wrapper.find(VUserProfile);

    //assert
    expext(userSearchForm.exists()).toBe(true);
    expext(userProfile.exists()).toBe(true);
  });
});
