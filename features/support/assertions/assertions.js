const Assertion = () => {
    return {
        displayed: (selector) => {
            $(selector).isDisplayed()
        }
    }
}

module.exports = { Assertion }