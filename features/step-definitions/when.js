const { When } = require("@wdio/cucumber-framework")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")

const selectors = new Selectors()

When(/^I Click on first "(.*)"$/, async (zadanie)=> {
    await Actions().clickOn(selectors.zadanie(1))
});
