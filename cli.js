#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const directory = args[0];
if (!directory) {
  console.error('Error: No directory specified.');
  process.exit(1);
}

const absolutePath = path.resolve(process.cwd(), directory);
if (!fs.existsSync(absolutePath)) {
  console.error('Error: Directory does not exist.');
  process.exit(1);
}

execSync(`npx textlint "${absolutePath}"`, { stdio: 'inherit' });
