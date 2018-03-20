import request from "supertest";
import server from "back/server";

jest.unmock("morgan");
jest.unmock("cors");

describe("server responses", () => {
  describe("GET /force-users", () => {
    it("returns the users", done => {
      request(server())
        .get("/force-users")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect("access-control-allow-origin", "http://localhost:8080")
        .then(res => expect(JSON.parse(res.text)).toMatchSnapshot())
        .then(done);
    });
  });
});
