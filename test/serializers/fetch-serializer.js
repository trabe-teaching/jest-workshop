module.exports = {
  test(val) {
    return val && typeof val === "object" && val.fetch && val.url && val.opts;
  },
  print(val, serialize, indent) {
    const { url, opts: { method, ...rest } } = val;
    return `[${method}] ${url} ${JSON.stringify(rest, null, "")}`;
  },
};
