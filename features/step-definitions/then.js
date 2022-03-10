const { Then } = require("@wdio/cucumber-framework")
const { Assertion } = require("../support/assertions/assertions")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")
const {Outline} = require("../specify/outline")
const path = require('path')


const selectors = new Selectors()

Then(/^I Check first "(.*)" content$/, async (zadanie) => {
    await Assertion().toBeEq(await Assertion().disabled(selectors.zadanie1Form()), true)
});

Then(/^I Check second "(.*)" content$/, async (zadanie) => {
    await Assertion().toBeEq(await Assertion().disabled(selectors.zadanie2Form()), true)
});

Then(/^I Check third "(.*)" content is disabled$/, async (zadanie) => {
    await Assertion().toBeEq(await Assertion().disabled(selectors.inputForm()), false)
});

Then(/^I Check third "(.*)" content is enabled$/, async (zadanie) => {
    await Assertion().toBeEq(await Assertion().disabled(selectors.inputForm()), true)
});

Then(/^I Check that Form are sent$/, async () => {
    await Assertion().displayed(selectors.noteComplete())
})

Then(/^I Check fifth "(.*)" content$/, async (zadanie) => {
    const filePath = await path.join('C:/Users/Admin/WebstormProjects/WebDriverIO task/features/test-data/test.txt');
    await Actions().fillField(selectors.fileUpload(), filePath)
    await Actions().executeKeyboard("Enter")
});

Then(/^I Check that sixth zadanie is open$/, async () => {
    await Assertion().toBeEq(await Assertion().displayed(selectors.loginField()), true)
    await Assertion().toBeEq(await Assertion().displayed(selectors.passwordField()), true)
    await Assertion().toBeEq(await Assertion().displayed(selectors.submitLoginForm()), true)
});

Then(/^I Check form status$/, async () => {
    await Actions().waitUntilDisplay(selectors.error())
    await Assertion().toBeEq(await Assertion().displayed(selectors.error()), true)
});

Then(/^I Check if zadanie is open$/, async () => {
    await Assertion().toBeEq(await Assertion().displayed(selectors.zadanieTitle()), true)
});

Then(/^I Check if Price Increasing$/, async ()=> {
    await Assertion().toBeEq(await $(selectors.summary).text(), "31.08 zł")
});

Then(/^"(.*)" window is displayed$/, async (error) => {
    await Outline().switchCaseForErrors(error)
});



