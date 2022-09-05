import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../../support/pages/loginPage";

Given('I am on the login page', () => {
  LoginPage.visit()
})

And('Log in with the user', () => {
  LoginPage.login()
})

Then('I should be redirected to a home page', () => {
  LoginPage.checkForHomePage()
})
