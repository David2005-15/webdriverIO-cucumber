exports.config = {
    specs: [
        './features/feature/*.feature'
    ],
    exclude: [

    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://testingcup.pgs-soft.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: true,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    suites: {
        zadanie1: [
            './features/feature/zadanie1.feature'
        ],
        zadanie2: [
            './features/feature/zadanie2.feature'
        ],
        zadanie3: [
            './features/feature/zadanie3.feature'
        ],
        zadanie5: [
            './features/feature/zadanie5.feature'
        ],
        zadanie6: [
            './features/feature/zadanie6.feature'
        ],
        zadanie7: [
            './features/feature/zadanie7.feature'
        ]
    }
}
