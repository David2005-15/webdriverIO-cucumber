const Actions = () => {
    return {
        goToUrl: async (url) => {
            await browser.url(url)
        },

        clickOn: async (selector) => {
            await $(selector).click()
        }
    }
}

module.exports = { Actions }
