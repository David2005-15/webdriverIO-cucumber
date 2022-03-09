const { Then } = require("@wdio/cucumber-framework")
const { Assertion } = require("../support/assertions/assertions")
const { Actions } = require("../support/actions/actions")
const { Selectors } = require("../selectors/selectors")
const path = require('path');

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
    await Actions().fillField(selectors.textArea(), "My Notes")
    await Actions().waitUntilClickable(selectors.submit())
    await Actions().clickOn(selectors.submit())
    await Assertion().displayed(selectors.noteComplete())
});

Then(/^I Check fifth "(.*)" content$/, async (zadanie) => {
    const filePath = await path.join('C:/Users/Admin/WebstormProjects/WebDriverIO task/features/test-data/test.txt');
    await Actions().fillField(selectors.fileUpload(), filePath)
    await Actions().executeKeyboard("Enter")
});


