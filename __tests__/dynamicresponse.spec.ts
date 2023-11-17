//import { promises as fsPromises } from 'fs';
const fsPromises = require("fs").promises;

/**
 * NB: In TypeScript, using require for importing modules from Node.js might cause issues,
 * especially when using TypeScript's ES modules.
 * use npm i --save-dev @types/node then add "node" to @types in tsconfig
 * @params
 *
 */

describe('main written response', () => {
  it('should be modified', async () => {
    const original = `# Something Dynamic is expected.\n`;
    const file = await fsPromises.readFile('./suggestions.md', 'utf-8');
    expect(file).not.toEqual(original);
  });
});




