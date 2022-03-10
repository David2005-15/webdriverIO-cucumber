const { Selectors } = require("../selectors/selectors");
const { Actions } = require("../support/actions/actions");
const { Assertion } = require("../support/assertions/assertions");

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
        },

        switchCaseForCardName: async (option) => {
            switch (option){
                case "david":
                    await Actions().fillField(selectors.names(), "david")
                    break
                case "gkhsad":
                    await Actions().fillField(selectors.names(), "gkhsad")
                    break
                default:
                    ////pass
            }
        },

        switchCaseForCardNumbers: async (option) => {
            switch (option){
                case "789978977897554":
                    await Actions().fillField(selectors.numbers(), "789978977897554")
                    break
                case "789978977897":
                    await Actions().fillField(selectors.numbers(), "789978977897")
                    break
                default:
                ////pass
            }
        },

        switchCaseForCardCvv: async (option) => {
            switch (option){
                case "457":
                    await Actions().fillField(selectors.cvv(), "457")
                    break
                default:
                ////pass
            }
        },

        switchCaseForErrors: async (option) => {
            switch (option){
                case "not found":
                    await Actions().waitUntilDisplay(selectors.errorForCard1())
                    await Assertion().toBeEq(await Assertion().displayed(selectors.errorForCard1()), true)
                    break
                case "request format":
                    await Actions().waitUntilDisplay(selectors.errorForCard2())
                    await Assertion().toBeEq(await Assertion().displayed(selectors.errorForCard2()), true)
            }
        }
    }
}

module.exports = { Outline }