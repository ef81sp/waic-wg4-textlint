#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const args = process.argv.slice(2);
const directory = args[0];
if (!directory) {
  console.error('Error: No directory specified.');
  process.exit(1);
}
if (!fs.existsSync(directory)) {
  console.error('Error: Directory does not exist.');
  process.exit(1);
}
execSync(`textlint "${directory}"`, { stdio: 'inherit' });