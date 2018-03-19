export const potentialForceUser = ({ rank }) => rank === "potential";

export const forceApprentice = ({ rank }) => rank === "apprentice";

export const darkSideApprentice = user => forceApprentice(user) && user.type === "dark";

export const aliveMaster = ({ rank, status }) => rank === "master" && status === "alive";

export const aliveJediMaster = user => aliveMaster(user) && user.type === "light";

export const aliveSithMaster = user => aliveMaster(user) && user.type === "dark";

export const userMasterIs = id => user => user.master === id;
