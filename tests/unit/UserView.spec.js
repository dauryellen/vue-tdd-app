import { shallowMount } from "@vue/test-utils";
import UserView from "../../src/views/UserView.vue";
import VUserSearchForm from "../../src/components/VUserSearchForm";
import VUserProfile from "../../src/components/VUserProfile";

describe("UserView", () => {
  const build = () => {
    const wrapper = shallowMount(UserView);

    return {
      wrapper,
      userSearchForm: () => wrapper.findComponent(VUserSearchForm),
      userProfile: () => wrapper.findComponent(VUserProfile),
    };
  };

  it("renders the component", () => {
    //arrange
    const { wrapper } = build();

    //assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    //arrange
    const { userSearchForm, userProfile } = build();

    //assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });
});
