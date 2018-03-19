import { potentialForceUser, forceApprentice, aliveJediMaster, darkSideApprentice } from "./filters";

const possibleActions = [
  {
    match: potentialForceUser,
    action: "seek",
  },
  {
    match: forceApprentice,
    action: "turn",
  },
  {
    match: aliveJediMaster,
    action: "banish",
  },
  {
    match: darkSideApprentice,
    action: "betray",
  },
];

export const addActions = user => {
  const actions = possibleActions.reduce((acc, { match, action }) => (match(user) ? [...acc, action] : acc), []);

  return {
    ...user,
    actions,
  };
};
