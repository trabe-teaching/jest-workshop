import React from "react";
import { shallow } from "enzyme";
import Avatar from "components/avatar";

describe("front/components/avatar", () => {
  it("renders an avatar", () => {
    const wrapper = shallow(<Avatar email="test@email.mail" />);

    expect(wrapper.find("img").prop("src")).toEqual(`assets/${btoa("test@email.mail")}.png`);
    expect(wrapper).toMatchSnapshot();
  });
});
