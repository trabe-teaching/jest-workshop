import createDataStore from "back/store/datastore";

const expectStoreApi = store =>
  expect(
    Object.keys(store)
      .sort()
      .join(" "),
  ).toEqual("all find findAllBy findBy reset update");

describe("back/store/datastore", () => {
  describe("#createDataStore", () => {
    it("creates an store with seeds", () => {
      const store = createDataStore();
      expectStoreApi(store);
      expect(store.all()).toMatchSnapshot();
    });

    describe("store API", () => {
      const store = createDataStore([
        {
          id: 1,
          name: "Luke Skywalker",
          type: "light",
          rank: "master",
          status: "alive",
          email: "luke@ach.to",
        },
        {
          id: 2,
          name: "Yoda",
          type: "light",
          rank: "master",
          status: "ghost",
          email: "yoda@dagobah.com",
        },
      ]);

      it("creates  store", () => {
        expectStoreApi(store);
      });

      describe("#all", () => {
        it("returns all", () => {
          expect(store.all()).toMatchSnapshot();
        });
      });

      describe("#find", () => {
        it("returns one", () => {
          expect(false && store.find(1)).toMatchSnapshot();
        });
      });

      describe("#findAllBy", () => {
        it("returns all by criteria", () => {
          expect(store.findAllBy(u => u.status === "alive")).toMatchSnapshot();
        });
      });

      describe("#findBy", () => {
        it("returns one by criteria", () => {
          expect(store.findBy(u => u.rank === "master")).toMatchSnapshot();
        });
      });

      describe("#update", () => {
        it("updates the store", () => {
          store.update({ ...store.find(2), status: "unknown" });
          expect(store.all()).toMatchSnapshot();
        });
      });

      describe("#reset", () => {
        it("restores the data", () => {
          store.update({ id: 100, name: "new" });
          expect(store.find(100)).not.toBe(undefined);
          store.reset();
          expect(store.find(100)).toBe(undefined);
          expect(store.all()).toMatchSnapshot();
        });
      });
    });
  });
});
