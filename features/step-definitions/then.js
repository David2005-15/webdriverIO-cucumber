const { Then } = require("@wdio/cucumber-framework")
const { Assertion } = require("../support/assertions/assertions")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")

const selectors = new Selectors()

Then(/^I Check first "(.*)" content$/, async (zadanie) => {
    require("chai").expect(await Assertion().displayed(selectors.zadanie1Form())).to.eq(true)
});

Then(/^I Check second "(.*)" content$/, async (zadanie) => {
    require("chai").expect(await Assertion().displayed(selectors.zadanie2Form())).to.eq(true)
});

Then(/^I Check third "(.*)" content$/, async (zadanie) => {
    require("chai").expect(await Assertion().disabled(selectors.inputForm())).to.eq(false)
    await Actions().clickOn(selectors.dropDown()[0])
    await Actions().clickOn(selectors.dropDown()[1])
    await Actions().clickOn(selectors.dropDown()[2])
    require("chai").expect(await Assertion().disabled(selectors.inputForm())).to.eq(true)
});


