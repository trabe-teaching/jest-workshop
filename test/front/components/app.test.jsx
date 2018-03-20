import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import App from "components/app";

jest.mock("action/creators", () => ({
  banish: id => ({
    type: "BANISH",
    id,
  }),
}));

describe("front/components/app", () => {
  const appState = {
    loading: 0,
    error: false,
    users: {
      repo: {
        1: {
          id: 1,
          name: "Luke Skywalker",
          type: "light",
          rank: "master",
          status: "alive",
          email: "luke@ach.to",
          actions: ["banish"],
        },
        2: {
          id: 2,
          name: "Ben Solo",
          type: "light",
          rank: "apprentice",
          status: "alive",
          master: 2,
          email: "ben.solo@gmail.com",
          actions: ["turn"],
        },
      },
      lightSiders: [1],
      darkSiders: [2],
    },
  };

  it("renders the app", () => {
    const store = configureStore([])(appState);

    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper
      .find("ForceUser")
      .first()
      .find(".button")
      .simulate("click");

    expect(store.getActions()).toMatchSnapshot();
  });
});
