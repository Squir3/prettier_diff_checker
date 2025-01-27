const fs = require("fs");
const prettier = require("prettier");
const {
  formatWithPrettier,
  generateFormattedFile,
  generateDiffFile,
  runCLI,
} = require("../prettier-diff-checker.js");

// Mockowanie modułów fs i prettier
jest.mock("fs");
jest.mock("prettier");

describe("prettier-diff-checker CLI", () => {
  const originalArgv = process.argv;
  const processExitMock = jest
    .spyOn(process, "exit")
    .mockImplementation(() => {});
  const consoleErrorMock = jest
    .spyOn(console, "error")
    .mockImplementation(() => {});

  afterEach(() => {
    jest.clearAllMocks();
    process.argv = originalArgv;
  });
  // Test sprawdzający, czy wyświetla się komunikat o użyciu i zakończenie procesu, gdy nie podano argumentów
  it("should show usage message and exit if no arguments are provided", async () => {
    process.argv = ["node", "prettier-diff-checker.js"];

    // Nie wywołuj `runCLI` bezpośrednio w `await` w tym przypadku
    await runCLI();

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Usage: prettier-diff-checker <file path>"
    );
    expect(processExitMock).toHaveBeenCalledWith(1);

    // Upewnij się, że `formatWithPrettier` nie jest wywoływany
    expect(prettier.format).not.toHaveBeenCalled();
  });

  // Test sprawdzający, czy przetwarza plik, gdy podano prawidłowe argumenty

  it("should process the file when valid arguments are provided", async () => {
    const filePath = "test.js";
    process.argv = ["node", "prettier-diff-checker.js", filePath];

    const originalCode = `const x = { a:1};`;
    const formattedCode = `const x = { a: 1 };\n`;

    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue(originalCode);
    fs.writeFileSync.mockReturnValue();
    prettier.resolveConfig.mockResolvedValue({});
    prettier.format.mockResolvedValue(formattedCode);

    await runCLI();

    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.stringContaining("_clean.js"),
      formattedCode,
      "utf-8"
    );
  });

  // Test sprawdzający, czy wyświetla się komunikat o błędzie i zakończenie procesu, gdy plik nie istnieje
  it("should exit with an error if the file does not exist", async () => {
    const filePath = "nonexistent.js";
    process.argv = ["node", "prettier-diff-checker.js", filePath];

    fs.existsSync.mockReturnValue(false);

    await runCLI();

    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Invalid file path. Use .js or .ts file."
    );
    expect(processExitMock).toHaveBeenCalledWith(1);
  });
});
