import { addActions } from "back/logic/actions";

describe("back/logic/filters", () => {
  describe("#addActions", () => {
    it("addActions", () => {
      expect(
        [
          {
            id: 1,
          },
          {
            id: 2,
            rank: "potential",
          },
          {
            id: 3,
            rank: "apprentice",
            type: "light",
          },
          {
            id: 4,
            rank: "apprentice",
            type: "dark",
          },
          {
            id: 5,
            rank: "master",
            type: "light",
            status: "alive",
          },
        ].map(addActions),
      ).toMatchSnapshot();
    });
  });
});
