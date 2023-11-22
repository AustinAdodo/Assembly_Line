/**
 * This module specifies the Configuration object for jest.
 *
 * install test environment for dom with npm install --save-dev jest-environment-jsdom
 * npm install --save-dev ts-node
 * This environment is essential for running Jest tests in a simulated DOM environment similar to a browser
 * @params
 * @returns Configurations for jest
 */

export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};

