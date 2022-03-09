const Actions = () => {
    return {
        goToUrl: async (url) => {
            await browser.url(url)
        },

        clickOn: async (selector) => {
            await $(selector).click()
        },

        fillField: async (selector, value) => {
            await $(selector).setValue(value)
        },

        switchChildWindows: async (value)=> {
            await browser.switchToWindow(value)
        },

        windowHandle: async ()=> {
            await browser.getWindowHandle()
        },

        executeKeyboard: async (key)=> {
            await browser.keys(key)
        },

        waitUntilClickable: async (selector) => {
            await $(selector).waitForClickable({timeout: 5000})
        },

        waitUntilDisplay: async (selector) => {
            await $(selector).waitForDisplayed({timeout: 5000})
        }
    }
}

module.exports = { Actions }
