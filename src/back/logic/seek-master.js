import { aliveJediMaster } from "./filters";
import { addActions } from "./actions";

export const seekMaster = (datastore, id) => {
  const potential = datastore.find(id);
  const master = datastore.findBy(aliveJediMaster);

  const newApprentice = { ...potential, rank: "apprentice", master: master.id };

  datastore.update(newApprentice);

  return [addActions(newApprentice)];
};
