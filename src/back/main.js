/* eslint-disable no-console */
import server from "./server";

server().listen(9090, () => console.log("\nListening at http://localhost:9090\n"));
