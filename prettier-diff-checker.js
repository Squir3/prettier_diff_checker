#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const prettier = require("prettier");
const diff = require("diff");

// Funkcja do formatowania kodu za pomocą Prettiera
async function formatWithPrettier(filePath) {
  const originalCode = fs.readFileSync(filePath, "utf-8");
  try {
    const options = (await prettier.resolveConfig(filePath)) || {
      parser: "babel",
      semi: true,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: "es5",
      endOfLine: "lf",
      printWidth: 80,
      bracketSpacing: true,
    };

    const formattedCode = await prettier.format(originalCode, {
      ...options,
      filepath: filePath,
    });

    return {
      originalCode: originalCode.toString().replace(/\r\n/g, "\n"),
      formattedCode: formattedCode.toString().replace(/\r\n/g, "\n"),
    };
  } catch (error) {
    console.error(`Error formatting file ${filePath}:`, error.message);
    process.exit(1);
  }
}

function generateFormattedFile(filePath, formattedCode) {
  const formattedFilePath = filePath.replace(/(\.js|\.ts)$/, "_clean$1");
  fs.writeFileSync(formattedFilePath, formattedCode, "utf-8");
  return formattedFilePath;
}

function generateDiffFile(filePath, original, formatted) {
  const diffResult = diff.diffLines(original, formatted);
  const diffLines = [];
  let lineNumber = 1;

  diffResult.forEach((part) => {
    const lines = part.value.split("\n");
    if (lines[lines.length - 1] === "") lines.pop();

    lines.forEach((line) => {
      if (part.removed) {
        diffLines.push(`Line ${lineNumber}: Removed "${line.trim()}"`);
      } else if (part.added) {
        diffLines.push(`Line ${lineNumber}: Added "${line.trim()}"`);
      }
      lineNumber++;
    });
  });

  const diffFilePath = filePath.replace(/(\.js|\.ts)$/, "_changes.txt");
  fs.writeFileSync(diffFilePath, diffLines.join("\n"), "utf-8");
  return diffFilePath;
}

async function runCLI() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error("Usage: prettier-diff-checker <file path>");
    process.exit(1); // Natychmiastowe zakończenie działania
    return; // Dodano, aby upewnić się, że dalszy kod nie zostanie wykonany w testach
  }

  const filePath = args[0];
  if (
    !fs.existsSync(filePath) ||
    (!filePath.endsWith(".js") && !filePath.endsWith(".ts"))
  ) {
    console.error("Invalid file path. Use .js or .ts file.");
    process.exit(1);
    return;
  }

  console.log(`Analyzing file: ${filePath}`);
  const { originalCode, formattedCode } = await formatWithPrettier(filePath);

  const formattedFilePath = generateFormattedFile(filePath, formattedCode);
  const diffFilePath = generateDiffFile(filePath, originalCode, formattedCode);

  console.log(`Created formatted file: ${formattedFilePath}`);
  console.log(`Created diff file: ${diffFilePath}`);
}

// Uruchomienie CLI tylko, gdy plik jest uruchamiany bezpośrednio
if (require.main === module) {
  runCLI().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
}

// Eksportowanie funkcji do testowania
module.exports = {
  formatWithPrettier,
  generateFormattedFile,
  generateDiffFile,
  runCLI,
};
