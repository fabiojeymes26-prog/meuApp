// Regression tests for: expo@57.0.24 upgrade
import { describe, expect, it } from 'vitest';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

const require = createRequire(import.meta.url);
const appPackage = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
);

describe('Expo application entry point', () => {
  it('resolves the entry point declared in the package manifest', () => {
    expect(appPackage.main).toBe('expo-router/entry');
    expect(require.resolve(appPackage.main)).toBeTruthy();
  });
});
