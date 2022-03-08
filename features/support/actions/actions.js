const Actions = () => {
    return {
        goToUrl: (url) => {
            browser.url(url)
        },

        clickOn: (selector) => {
            $(selector).click()
        }
    }
}

module.exports = { Actions }
