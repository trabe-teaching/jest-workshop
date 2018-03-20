import deepFreeze from "deepfreeze";
import users, { getLightSiders, getDarkSiders } from "reducers/users";

const state = {
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
      name: "Yoda",
      type: "light",
      rank: "master",
      status: "ghost",
      email: "yoda@dagobah.com",
      actions: [],
    },
    3: {
      id: 3,
      name: "Ben Solo",
      type: "light",
      rank: "apprentice",
      status: "alive",
      master: 1,
      email: "ben.solo@gmail.com",
      actions: ["turn", "betray", "seekMaster"],
    },
  },
  lightSiders: [1, 2],
  darkSiders: [3],
};

deepFreeze(state);

describe("front/reducers/application", () => {
  describe("reducer", () => {
    it("has a default state", () => {
      expect(users(undefined, { type: "@init" })).toMatchSnapshot();
    });

    it("reduces nothing", () => {
      expect(users(state, { type: "NOPE" })).toEqual(state);
    });

    it("reduces REQUEST", () => {
      const action = {
        type: "USERS_UPDATED",
        payload: {
          users: [
            {
              id: 1,
              name: "Luke Skywalker",
              type: "light",
              rank: "master",
              status: "ghost",
              email: "luke@ach.to",
            },
          ],
        },
      };

      expect(users(state, action)).toMatchSnapshot();
    });
  });

  describe("#getLightSiders", () => {
    it("returns ligh users", () => {
      expect(getLightSiders(state)).toMatchSnapshot();
    });

    it("returns dark users", () => {
      expect(getDarkSiders(state)).toMatchSnapshot();
    });
  });
});
