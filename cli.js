#!/usr/bin/env node

const { execSync } = require('child_process');

execSync('textlint "./docs/**/*.html"', { stdio: 'inherit' });