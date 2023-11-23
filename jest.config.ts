/**
 * This module specifies the Configuration object for jest.
 *
 * install test environment for dom with npm install --save-dev jest-environment-jsdom
 * npm install --save-dev ts-node
 * This environment is essential for running Jest tests in a simulated DOM environment similar to a browser
 *
 * @params extensionsToTreatAsEsm: Defines file extensions treated as ECMAScript Modules.
 * @params globals with ts-jest options: Enables ESM support for ts-jest.
 * @params transform configuration for TypeScript files using ts-jest.
 * @params moduleNameMapper: Helps Jest handle relative imports correctly.
 * @returns Configurations for jest
 */

export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  globals: {
    'ts-jest': {
      useESM: true,
      // Other ts-jest configuration options can be added here if needed
    },
  },
};


