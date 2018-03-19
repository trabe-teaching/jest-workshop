import seeds from "./seeds.js";

const createDataStore = (data = seeds) => {
  let users = [...data];

  const all = () => users;

  const findAllBy = criteria => users.filter(criteria);

  const findBy = criteria => findAllBy(criteria)[0];

  const find = id => findBy(u => u.id === id);

  const update = user => {
    const position = users.findIndex(u => u.id === user.id);
    users = [...users.slice(0, position), user, ...users.slice(position + 1)];
  };

  const reset = () => {
    users = [...data];
  };

  return {
    all,
    find,
    findAllBy,
    findBy,
    update,
    reset,
  };
};

export default createDataStore;
