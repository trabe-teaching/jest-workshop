import { addActions } from "./actions";

export const findUsers = datastore => datastore.all().map(addActions);
