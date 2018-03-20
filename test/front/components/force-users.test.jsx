import React from "react";
import { shallow } from "enzyme";
import ForceUsers from "components/force-users";

describe("front/components/force-users", () => {
  const users = [
    {
      id: 1,
      name: "Luke Skywalker",
    },
    {
      id: 2,
      name: "Yoda",
    },
  ];

  it("renders the force users", () => {
    const wrapper = shallow(<ForceUsers users={users} onX="onX" onY="onY" />);
    expect(wrapper).toMatchSnapshot();
  });
});
