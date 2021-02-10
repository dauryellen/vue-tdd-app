import { shallowMount } from "@vue/test-utils";
import UserView from "../../src/views/UserView.vue";

describe("UserView", () => {
  it("renders the component", () => {
    //arrange
    const wrapper = shallowMount(UserView);

    //assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});
