import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  moduleDirectories: [
    "node_modules"
  ],
  modulePathIgnorePatterns: [],
  rootDir: '../../',
  modulePaths: [
    "<rootDir>src",
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.svg": "<rootDir>config/jest/jestEmptyComponent.tsx",
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    "^@/(.*)$": "<rootDir>/src/$1",
  },

};

export default config;
