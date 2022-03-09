const { Then } = require("@wdio/cucumber-framework")
const { Assertion } = require("../support/assertions/assertions")
const { Selectors } = require("../selectors/selectors")

const selectors = new Selectors()

Then(/^I Check first "(.*)" content/, async (zadanie) => {
    await Assertion().displayed(selectors.zadanie1Form())
});

Then(/^I Check second "(.*)" content/, async (zadanie) => {
    await Assertion().displayed(selectors.zadanie1Form())
});

Then(/^I Check third "(.*)" content/, async (zadanie) => {
    await Assertion().disabled(selectors.inputForm())
})

