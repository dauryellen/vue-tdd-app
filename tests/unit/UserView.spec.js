import { shallowMount } from "@vue/test-utils";
import UserView from "@vue/views/UserView";

describe("UserView", () => {
  it("renders the component", () => {
    //arrange
    const wrapper = shallowMount(UserView);

    //assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});
