const test = require('node:test');
const assert = require('node:assert/strict');
const pkg = require('../package.json');

// CVE-2026-20452: pdf-stamp below 2.3.4 is affected. Guard against a downgrade.
test('pdf-stamp is pinned to a patched version (>= 2.3.4)', () => {
  const version = pkg.dependencies['pdf-stamp'];
  assert.ok(version, 'pdf-stamp should be declared in dependencies');
  const [major, minor, patch] = version.split('.').map(Number);
  const patched = major > 2 || (major === 2 && (minor > 3 || (minor === 3 && patch >= 4)));
  assert.ok(patched, `pdf-stamp ${version} is affected by CVE-2026-20452; use 2.3.4 or later`);
});
