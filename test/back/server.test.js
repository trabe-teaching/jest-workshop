import request from "supertest";
import server from "back/server";

jest.mock("back/logic");

describe("server responses", () => {
  describe("GET /force-users", () => {
    it("returns the users", done => {
      request(server())
        .get("/force-users")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect("CORS", "http://localhost:8080")
        .expect("MORGAN", "tiny")
        .then(res => expect(JSON.parse(res.text)).toMatchSnapshot())
        .then(() => done());
    });
  });
});
