#!/usr/bin/env node

import fs from "fs"
import path from "path"
import { createLinter, loadTextlintrc, loadLinterFormatter } from "textlint"

const args = process.argv.slice(2)
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
const descriptor = await loadTextlintrc()
console.dir({ descriptor }, { depth: null })

const linter = createLinter({
  descriptor,
})

const results = await linter.lintFiles([`${absolutePath}/**/*.html`])
// textlint has two types formatter sets for linter and fixer
const formatter = await loadLinterFormatter({ formatterName: "stylish" })
const output = formatter.format(results)
console.log(output)
