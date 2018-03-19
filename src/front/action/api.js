const fetchOp = method => (url, opts) =>
  fetch(`http://localhost:9090${url}`, {
    ...opts,
    mode: "cors",
    method,
  }).then(
    res => {
      if (!res.ok) {
        throw new Error("Fetch error");
      }
      return res.json();
    },
    e => {
      throw e;
    },
  );

const get = fetchOp("get");
const post = fetchOp("post");
const put = fetchOp("put");

export const fetchUsers = () => get("/force-users");
export const seekMaster = id => put(`/seek/${id}`);
export const turn = id => put(`/turn/${id}`);
export const betray = id => put(`/betray/${id}`);
export const banish = id => put(`/banish/${id}`);
export const reset = () => post("/reset").then(fetchUsers);
