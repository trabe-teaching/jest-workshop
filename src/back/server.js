import path from "path";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import createDataStore from "./store/datastore";
import * as logic from "./logic";

export default () => {
  const store = createDataStore();

  return express()
    .use(morgan("tiny"))
    .use(cors({ origin: "http://localhost:8080" }))
    .use("/", express.static(path.join(__dirname, "..", "front")))
    .get("/force-users", (req, res) => {
      const users = logic.findUsers(store);
      res.send(users);
    })
    .put("/seek/:id", (req, res) => {
      const users = logic.seekMaster(store, Number(req.params.id));
      res.send(users);
    })
    .put("/turn/:id", (req, res) => {
      const users = logic.turn(store, Number(req.params.id));
      res.send(users);
    })
    .put("/betray/:id", (req, res) => {
      const users = logic.betray(store, Number(req.params.id));
      res.send(users);
    })
    .put("/banish/:id", (req, res) => {
      const users = logic.banish(store, Number(req.params.id));
      res.send(users);
    })
    .post("/reset", (req, res) => {
      store.reset();
      res.send({});
    });
};
