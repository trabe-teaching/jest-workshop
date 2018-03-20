import React from "react";
import { shallow } from "enzyme";
import ForceUser from "components/force-user";

describe("front/components/force-user", () => {
  const user = {
    id: 100,
    name: "Luke Skywalker",
    type: "light",
    rank: "master",
    status: "alive",
    email: "luke@ach.to",
  };

  it("renders a force user", () => {
    const wrapper = shallow(<ForceUser user={user} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("actions", () => {
    ["Banish"].forEach(action => {
      it(`renders a force user that can ${action}`, () => {
        const handler = jest.fn();
        const preventDefault = jest.fn();

        const props = {
          user: {
            ...user,
            [`can${action}`]: true,
          },
          [`on${action}`]: handler,
        };

        const wrapper = shallow(<ForceUser {...props} />);
        expect(wrapper).toMatchSnapshot();

        wrapper.find(".button").simulate("click", { preventDefault });
        expect(preventDefault).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledWith(100);
      });
    });
  });
});
