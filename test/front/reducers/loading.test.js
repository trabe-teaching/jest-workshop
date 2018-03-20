import loading, { isLoading } from "reducers/loading";

describe("front/reducers/application", () => {
  describe("reducer", () => {
    it("has a default state", () => {
      expect(loading(undefined, { type: "@init" })).toBe(0);
    });

    it("reduces nothing", () => {
      const state = 0;
      expect(loading(state, { type: "NOPE" })).toBe(state);
    });

    it("reduces REQUEST", () => {
      const state = 2;
      expect(loading(state, { type: "XXXX_REQUEST" })).toBe(3);
    });

    it("reduces SUCCESS", () => {
      const state = 2;
      expect(loading(state, { type: "XXXX_SUCCESS" })).toBe(1);
    });
  });

  describe("#isLoading", () => {
    it("returns true if count > 0", () => {
      const state = 1;
      expect(isLoading(state)).toBe(true);
    });

    it("returns false if count = 0", () => {
      const state = 0;
      expect(isLoading(state)).toBe(false);
    });
  });
});
