// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  globalTeardown:require.resolve('./globals/global-teardown'),
  use: {
    screenshot: 'only-on-failure'
  },
    reporter: [ ['junit', { outputFile: 'results.xml' }] ],
};
export default config;