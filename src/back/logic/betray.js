import { addActions } from "./actions";

export const betray = (datastore, id) => {
  const apprentice = datastore.find(id);
  const betrayedMaster = datastore.find(apprentice.master);

  const deadMaster = { ...betrayedMaster, status: "dead" };
  const newMaster = { ...apprentice, rank: "master", master: null };

  datastore.update(deadMaster);
  datastore.update(newMaster);

  return [addActions(deadMaster), addActions(newMaster)];
};
