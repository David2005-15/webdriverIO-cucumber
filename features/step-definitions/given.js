const { Given } = require("@wdio/cucumber-framework")
const { Actions } = require("../support/actions/actions")

Given(/I Open Web Site/, async () => {
   await Actions().goToUrl("/")
});
