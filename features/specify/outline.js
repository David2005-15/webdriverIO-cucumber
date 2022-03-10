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
        },

        switchCaseForRoot: async (option) => {
            switch (option){
                case "main root":
                    await Actions().clickOn(selectors.roots()[0])
                    break
                case "child root1":
                    await Actions().clickOn(selectors.roots()[1])
                    break
                case "child root2":
                    await Actions().clickOn(selectors.roots()[2])
                    break
                case "child root1-1":
                    await Actions().clickOn(selectors.roots()[3])
                    break
                default:
                    ///pass
            }
        },

        switchCaseForContent: async (option) => {
            switch (option){
                case "main content":
                    await Assertion().toBeEq(await Assertion().displayed(selectors.content()), true)
                    break
                case "child root1 content":
                    await Assertion().toBeEq(await Assertion().displayed(selectors.content()), true)
                    break
                case "child root2 content":
                    await Assertion().toBeEq(await Assertion().displayed(selectors.content()), true)
                    break
                case "child root1-1 content":
                    await Assertion().toBeEq(await Assertion().displayed(selectors.content()), true)
                    break
                default:
                    ////pass
            }
        }
    }
}

module.exports = { Outline }