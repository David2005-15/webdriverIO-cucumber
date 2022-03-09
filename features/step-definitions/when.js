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
})
