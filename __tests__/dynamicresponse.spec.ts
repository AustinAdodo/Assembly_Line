const fs = require("fs").promises;

describe("candidate written response", () => {
  it("should be modified", async () => {
    const original = `# Something Dynamic is expected.


`;
    const file = await fs.readFile("./suggestions.md");
    expect(file.toString()).not.toEqual(original);
  });
});
