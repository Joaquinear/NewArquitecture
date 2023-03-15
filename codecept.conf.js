exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.unir.net/',
      show: true,
      windowSize: '1920x1080',
      waitForAction: 1000,
      restart: true,
      keepCookies: false,
      chrome: {
        args: [
          '--no-sandbox',
          '--window-size=1920,1080',
          '--disable-features=ImprovedCookieControls'
        ]
      }
    }
  },
  include: {
    I: './steps_file.js',
    Yo: './acciones/Yo.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js','./step_definitions/PasosUnir.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    // stepByStepReport: {
    //   enabled: true,
    //   screenshotsForAllureReport:true,
    // },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'NewArquitecture'
}