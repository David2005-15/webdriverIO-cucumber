const Assertion = () => {
    return {
        displayed: async (selector) => {
            await $(selector).isDisplayed()
        }
    }
}

module.exports = { Assertion }