module.exports = {
  globals: {
    NODE_ENV: "test",
  },
  moduleDirectories: ["node_modules", "./src/front", "./src/back", "./src"],
  setupFiles: ["<rootDir>/test/helpers/expect-extensions.js", "<rootDir>/test/helpers/enzyme-setup.js"],
  snapshotSerializers: [
    "<rootDir>/node_modules/enzyme-to-json/serializer",
    "<rootDir>/test/serializers/fetch-serializer",
  ],
  moduleNameMapper: {
    "\\.png$": "<rootDir>/test/__mocks__/image-mock.js",
    "\\.css$": "<rootDir>/test/__mocks__/css-mock.js",
    "bulma|assets\\/styles": "<rootDir>/test/__mocks__/css-mock.js",
  },
};
