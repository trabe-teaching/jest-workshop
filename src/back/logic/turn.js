import { darkSideApprentice, aliveJediMaster, aliveSithMaster } from "./filters";
import { addActions } from "./actions";

export const turn = (datastore, id) => {
  const apprentice = datastore.find(id);
  const darkSide = darkSideApprentice(apprentice);
  const master = datastore.findBy(darkSide ? aliveJediMaster : aliveSithMaster);

  const turnedApprentice = { ...apprentice, type: darkSide ? "light" : "dark", master: master && master.id };

  datastore.update(turnedApprentice);

  return [addActions(turnedApprentice)];
};
