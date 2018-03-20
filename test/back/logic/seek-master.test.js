import { seekMaster } from "back/logic/seek-master";

const seeds = [
  {
    id: 1,
    name: "Luke Skywalker",
    type: "light",
    rank: "master",
    status: "alive",
  },
  {
    id: 4,
    name: "Rey",
    type: "light",
    rank: "potential",
    status: "alive",
  },
];

let data = [...seeds];

expect.addSnapshotSerializer({
  test: val => val && val.seeds && val.changes && val.data,
  print: ({ seeds, changes, data }, serialize) => {
    const buffer = [];
    buffer.push("---------- SEEDS ----------");
    buffer.push(serialize(seeds));
    buffer.push("--------- CHANGES ---------");
    buffer.push(serialize(changes));
    buffer.push("--------- DATA ------------");
    buffer.push(serialize(data));
    return buffer.join("\n");
  },
});

const store = {
  find: id => data[id],
  findBy: criteria => data.filter(criteria)[0],
  update: user => (data = [...data.filter(u => u.id !== user.id), user]),
};

describe("back/logic/seek-master", () => {
  it("converst a potential into an appretince", () => {
    const changes = seekMaster(store, 1);
    expect({ seeds, changes, data }).toMatchSnapshot();
  });
});
