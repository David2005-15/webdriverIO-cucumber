const Assertion = () => {
    return {
        displayed: async (selector) => {
            return await $(selector).isDisplayed()
        },

        disabled: async (selector) => {
            return $(selector).isEnabled()
        }
    }
}

module.exports = { Assertion }