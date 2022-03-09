const {Selectors} = require("../selectors/selectors");
const { Actions } = require("../support/actions/actions")

const selectors = new Selectors();

const Outline = () => {
    return {
        switchCaseForLogin: async (option) => {
            switch (option){
                case "david":
                    await Actions().fillField(selectors.loginField(), "david")
                    break
                case "1234":
                    await Actions().fillField(selectors.loginField(), "1234")
                    break
                case "#$%#@$":
                    await Actions().fillField(selectors.loginField(), "#$%#@$")
                    break
                default:
                    ////pass
            }
        },

        switchCaseForPassword: async (option) => {
            switch (option){
                case "123412":
                    await Actions().fillField(selectors.passwordField(), "123412")
                    break
                case "ghjkliub":
                    await Actions().fillField(selectors.passwordField(), "ghjkliub")
                    break
                case "$#$%#":
                    await Actions().fillField(selectors.passwordField(), "$#$%#")
                    break
                default:
                ////pass
            }
        }
    }
}

module.exports = { Outline }