import { fetchUsers, seekMaster, reset } from "action/api";

global.fetch = (url, opts) => {
  switch (opts.method) {
    case "get":
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ fetch: true, url, opts }),
      });

    case "post":
      return Promise.resolve({
        ok: false,
      });

    default:
      return Promise.reject({ fetch: true, url, opts });
  }
};

describe("front/action/api", () => {
  describe("#fetchUsers", () => {
    it("GET /force-users", () => {
      expect(fetchUsers()).resolves.toMatchSnapshot();
    });
  });

  describe("#seekMaster", () => {
    it("PUT /seek/id", () => {
      expect(seekMaster(1)).rejects.toMatchSnapshot();
    });
  });

  describe("#reset", () => {
    it("POST /reset", () => {
      expect(reset()).rejects.toMatchSnapshot();
    });
  });
});
