const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      // browser: 'firefox',
      url: 'https://martin-kregar.celtra.com/explorer/1df8d540',
      show: true
    }
  },
  multiple: {                    // https://codecept.discourse.group/t/running-tests-across-multiple-browsers-in-playwright/761
    allbrowsers: {
      browsers: [
        { browser: 'firefox' },
        { browser: 'webkit' },
        { browser: 'chromium' }
      ]
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Celtra_TA',
  plugins: {
    customLocator: {
      enabled: true,
      attribute: ['data-testilda-id', 'data-id', 'data-item-id']
    }
  }
}