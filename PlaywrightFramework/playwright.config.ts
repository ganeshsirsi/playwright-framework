// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  globalTeardown:require.resolve('./globals/global-teardown'),
  use: {
    headless: false,
    browserName: 'chromium',
    screenshot: 'only-on-failure'
  },
    reporter: [ ['line'],['junit', { outputFile: 'results.xml' }] ],
   
};
export default config;