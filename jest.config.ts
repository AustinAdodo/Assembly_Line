//npm install --save-dev jest-environment-jsdom
/**
 * This environment is essential for running Jest tests in a simulated DOM environment similar to a browser
 * @params
 * * stages?: string[]. The amount of columns to be traversed.
 * * items?: string[]. The total number of items.
 *
 * @returns
 * A Configuration object.
 */

export default {
  testEnvironment: 'jsdom',
  module: 'ts-node/register',
  preset: 'ts-jest',
};
//npm install --save-dev ts-node
