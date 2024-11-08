#!/usr/bin/env node

import fs from "fs"
import path from "path"
import {
  createLinter,
  loadTextlintrc,
  loadLinterFormatter,
  loadFixerFormatter,
} from "textlint"

const args = process.argv.slice(2)

console.log(args)
const directory = args[0]
if (!directory) {
  console.error("Error: No directory specified.")
  process.exit(1)
}

const absolutePath = path.resolve(process.cwd(), directory)
if (!fs.existsSync(absolutePath)) {
  console.log(absolutePath)
  console.error("Error: Directory does not exist.")
  process.exit(1)
}

// descriptor is a structure object for linter
// It includes rules, plugins, and options
const descriptor = await loadTextlintrc({
  configFilePath: new URL(".textlintrc.json", import.meta.url).pathname,
})

const linter = createLinter({
  descriptor,
})

const isFix = args[1] === "--fix"
const files = [path.join(absolutePath, '**/*.html')]
const results = isFix
  ? await linter.fixFiles(files)
  : await linter.lintFiles(files)

if (isFix) {
  for (const result of results) {
    if (result.filePath) {
      fs.promises.writeFile(result.filePath, result.output)
    }
  }
}

// textlint has two types formatter sets for linter and fixer
const formatter = isFix
  ? await loadFixerFormatter({ formatterName: "stylish" })
  : await loadLinterFormatter({ formatterName: "stylish" })
const output = formatter.format(results)
console.log(output)
