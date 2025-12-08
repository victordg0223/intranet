#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  console.log('>>> Vercel build helper: building frontend only (frontend/)');
  execSync('npm --prefix frontend run build', { stdio: 'inherit' });
  console.log('>>> Frontend build completed successfully.');
} catch (err) {
  console.error('>>> Frontend build failed:', err);
  process.exit(1);
}
