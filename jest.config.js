const { defaults } = require("jest-config")

module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime'],
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  testEnvironment: "<rootDir>/jest.env.js"
}
