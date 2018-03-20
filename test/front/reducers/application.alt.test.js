import deepFreeze from "deepfreeze";
import application, { isLoading, hasError, getLightSiders, getDarkSiders } from "reducers/application";

const state = {
  error: false,
  loading: 1,
  users: {
    repo: {
      1: { name: "john", actions: [] },
      2: { name: "lucas", actions: [] },
    },
    lightSiders: [1],
    darkSiders: [2],
  },
};

deepFreeze(state);

describe("front/reducers/application", () => {
  describe("reducer", () => {
    it("has a default state", () => {
      expect(application(undefined, { type: "@init" })).toMatchSnapshot();
    });

    it("reduces nothing", () => {
      expect(application(state, { type: "NOPE" })).toMatchSnapshot();
    });

    it("reduces REQUEST", () => {
      expect(application(state, { type: "XXXX_REQUEST" })).toMatchSnapshot();
    });
  });

  deepFreeze(state);

  describe("#isLoading", () => {
    expect(isLoading(state)).toBe(true);
  });

  describe("#hasError", () => {
    expect(hasError(state)).toBe(false);
  });

  describe("#getLightSiders", () => {
    expect(getLightSiders(state)).toMatchSnapshot();
  });

  describe("#getDarkSiders", () => {
    expect(getDarkSiders(state)).toMatchSnapshot();
  });
});
