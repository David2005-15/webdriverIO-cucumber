const { When } = require("@wdio/cucumber-framework")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")
const { Outline } = require("../specify/outline")

const selectors = new Selectors()

When(/^I Click on first "(.*)"$/, async (zadanie)=> {
    await Actions().clickOn(selectors.zadanie(1))
});

When(/^I Click on second "(.*)"$/, async (zadanie)=> {
    await Actions().clickOn(selectors.zadanie(2))
});

When(/^I Click on third "(.*)"$/, async (zadanie)=> {
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

When(/^I Click on fifth "(.*)"$/, async (zadanie) => {
    await Actions().clickOn(selectors.zadanie(5))
});

When(/^I Click on sixth "(.*)"$/, async (zadanie) => {
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
