import deepFreeze from "deepfreeze";
import application, { isLoading, hasError, getLightSiders, getDarkSiders } from "reducers/application";

jest.mock("redux", () => ({
  combineReducers: spec => spec,
}));

jest.mock("reducers/loading", () => ({
  __esModule: true,
  default: "loadingReducer",
  isLoading: x => `isLoading ${x}`,
}));

jest.mock("reducers/error", () => ({
  __esModule: true,
  default: "errorReducer",
  hasError: x => `hasError ${x}`,
}));

jest.mock("reducers/users", () => ({
  __esModule: true,
  default: "usersReducer",
  getLightSiders: x => `getLightSiders ${x}`,
  getDarkSiders: x => `getDarkSiders ${x}`,
}));

describe("front/reducers/application", () => {
  describe("reducer", () => {
    it("combines other reducers", () => {
      expect(application).toMatchSnapshot();
    });
  });

  const state = {
    error: "error",
    loading: "loading",
    users: "users",
  };

  deepFreeze(state);

  describe("#isLoading", () => {
    expect(isLoading(state)).toEqual("isLoading loading");
  });

  describe("#hasError", () => {
    expect(hasError(state)).toEqual("hasError error");
  });

  describe("#getLightSiders", () => {
    expect(getLightSiders(state)).toEqual("getLightSiders users");
  });

  describe("#getDarkSiders", () => {
    expect(getDarkSiders(state)).toEqual("getDarkSiders users");
  });
});
