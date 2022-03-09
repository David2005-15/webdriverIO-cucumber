const Assertion = () => {
    return {
        displayed: async (selector) => {
            await $(selector).isDisplayed()
        },

        disabled: async (selector) => {
            try{
               await $(selector).isEnabled
            } catch (disabled){
                if (!disabled){
                    return disabled
                }else {
                    return true
                }
            }
        }
    }
}

module.exports = { Assertion }