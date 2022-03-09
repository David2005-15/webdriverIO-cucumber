const { When } = require("@wdio/cucumber-framework")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")

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


When(/^I Click on fifth "(.*)"$/, async (zadanie)=> {
    await Actions().clickOn(selectors.zadanie(5))
});

