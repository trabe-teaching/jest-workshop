import { userMasterIs } from "./filters";
import { addActions } from "./actions";

export const banish = (datastore, id) => {
  const master = datastore.find(id);
  const apprentices = datastore.findAllBy(userMasterIs(id));

  const forceGhost = { ...master, status: "ghost" };
  const roninApprentices = apprentices.map(apprentice => ({ ...apprentice, master: null }));

  datastore.update(forceGhost);
  roninApprentices.forEach(apprentice => datastore.update(apprentice));

  return [addActions(forceGhost), ...roninApprentices.map(apprentice => addActions(apprentice))];
};
