import { USERS_UPDATED } from "action/creators";

const initialState = {
  repo: {},
  lightSiders: [],
  darkSiders: [],
};

const lightSider = user => user.type === "light";
const darkSider = user => user.type === "dark";

const id = user => user.id;
const indexById = col => col.reduce((acc, e) => ({ ...acc, [id(e)]: e }), {});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USERS_UPDATED:
      const updatedRepo = { ...state.repo, ...indexById(payload.users) };
      const users = Object.values(updatedRepo);

      return {
        repo: updatedRepo,
        lightSiders: users.filter(lightSider).map(id),
        darkSiders: users.filter(darkSider).map(id),
      };

    default:
      return state;
  }
};

const hydrate = (state, ids) =>
  ids.map(id => {
    const { actions, master, ...user } = state.repo[id];

    return {
      ...user,
      master: master && state.repo[master],
      canSeek: actions.includes("seek"),
      canTurn: actions.includes("turn"),
      canBetray: actions.includes("betray"),
      canBanish: actions.includes("banish"),
    };
  });

export const getLightSiders = state => hydrate(state, state.lightSiders);
export const getDarkSiders = state => hydrate(state, state.darkSiders);
