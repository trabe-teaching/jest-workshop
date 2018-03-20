import { potentialForceUser, forceApprentice, darkSideApprentice } from "back/logic/filters";

describe("back/logic/filters", () => {
  describe("#potentialForceUser", () => {
    it("checks", () => {
      expect(potentialForceUser({ rank: "potential" })).toBe(true);
      expect(potentialForceUser({ rank: "master" })).toBe(false);
    });
  });

  describe("#forceApprentice", () => {
    it("checks", () => {
      expect(forceApprentice({ rank: "apprentice" })).toBe(true);
      expect(forceApprentice({ rank: "master" })).toBe(false);
    });
  });

  describe("#darkSideApprentice", () => {
    it("checks", () => {
      expect(darkSideApprentice({ rank: "apprentice", type: "dark" })).toBe(true);
      expect(darkSideApprentice({ rank: "apprentice", type: "light" })).toBe(false);
    });
  });
});
