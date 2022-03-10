const { When } = require("@wdio/cucumber-framework")
const { Actions } = require("../support/actions/actions")
const { Assertion } = require("../support/assertions/assertions")
const { Selectors } = require("../selectors/selectors")
const { Outline } = require("../specify/outline")

const selectors = new Selectors()

When(/^I Click on first (.*)$/, async ()=> {
    await Actions().clickOn(selectors.zadanie(1))
});

When(/^I Click on second (.*)$/, async ()=> {
    await Actions().clickOn(selectors.zadanie(2))
});

When(/^I Click on third (.*)$/, async ()=> {
    await Actions().clickOn(selectors.zadanie(3))
});

When(/^I Make content enabled$/, async () => {
    await Actions().clickOn(selectors.dropDown()[0])
    await Actions().clickOn(selectors.dropDown()[1])
    await Actions().clickOn(selectors.dropDown()[2])
});

When(/^I Fill the Form$/, async () => {
    await Actions().fillField(selectors.textArea(), "My Notes")
    await Actions().waitUntilClickable(selectors.submit())
});

When(/^I Send the Form$/, async () => {
    await Actions().clickOn(selectors.submit())
});

When(/^I Click on fifth (.*)$/, async () => {
    await Actions().clickOn(selectors.zadanie(5))
});

When(/^I Click on sixth (.*)$/, async () => {
    await Actions().clickOn(selectors.zadanie(6))
});

When(/^I Fill login with "(.*)"$/, async (login) => {
    await Outline().switchCaseForLogin(login)
});

When(/^I Fill password with "(.*)"$/, async (password) => {
    await Outline().switchCaseForPassword(password)
    await Actions().clickOn(selectors.submitLoginForm())
});

When(/^I Click on Seventh zadanie$/, async () => {
    await Actions().clickOn(selectors.zadanie(7))
});

When(/^I Drag and Drop First Item$/, async () => {
    await Actions().dragAndDrop(selectors.firstItem(), selectors.target())
});

When(/^I Open Eighth zadanie$/, async ()=> {
    await Actions().clickOn(selectors.zadanie(8))
});

When(/^I Fill Cart Name with "(.*)"$/, async (name) => {
    await Outline().switchCaseForCardName(name)
});

When(/^I Fill Cart Numbers with "(.*)"$/, async (numbers) => {
    await Outline().switchCaseForCardNumbers(numbers)
});

When(/^I Fill Cart CVV code with "(.*)"$/, async (cvv) => {
    await Outline().switchCaseForCardCvv(cvv)
    await Actions().clickOn(selectors.submitForCard())
});

When(/^I Open Ninth zadanie$/, async () => {
    await Actions().clickOn(selectors.zadanie(9))
});

When(/^I Expend nodes$/, async () => {
    let checkpoint = await Assertion().displayed(selectors.roots()[1])
    if (checkpoint === false){
        await Actions().waitUntilDisplay(selectors.jsTree()[0])
        await Actions().clickOn(selectors.jsTree()[0])
    }

    await Actions().waitUntilDisplay(selectors.jsTree()[1])
    await Actions().clickOn(selectors.jsTree()[1])
});

When(/^I Click on "(.*)"$/, async (root) => {
    await Outline().switchCaseForRoot(root)
});

