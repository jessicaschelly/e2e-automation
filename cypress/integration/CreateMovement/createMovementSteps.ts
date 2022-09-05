import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import CreateMovementPage from "../../support/pages/createMovementPage";
import LoginPage from "../../support/pages/loginPage";

Given('I am logged in', () => {
  LoginPage.login()
  LoginPage.checkForHomePage()
})

When('I go into Create Movement', () => {
  CreateMovementPage.goToCreateMovement()
})
And('I fill in all required fields and create the movement', () => {
  CreateMovementPage.fillInRequiredFields()
})
Then('it should be displayed a success message', () => {
  CreateMovementPage.validateSucessMessage()
})
  