const Assertion = () => {
    return {
        displayed: async (selector) => {
            return await $(selector).isDisplayed()
        },

        disabled: async (selector) => {
            return $(selector).isEnabled()
        },

        toBeEq: async (actual, expected) => {
            //require("chai").expect(await Assertion().disabled(selectors.inputForm())).to.eq(true)
            require("chai").expect(expected).to.be.eq(actual)
        }
    }
}

module.exports = { Assertion }