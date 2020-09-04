module.exports = {
  clearMocks: true,
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  preset: "ts-jest",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testMatch: [ 
    "**/__tests__/**/*.ts", 
    "**/?(*.)+(spec|test).ts" 
  ],
  testEnvironment: "node",
};
