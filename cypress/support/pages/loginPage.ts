import Locators from "../locators";

export default class LoginPage {
  static url = 'https://seubarriga.wcaquino.me/'
  static email = "jessicaschellysouza@gmail.com";
  static password = "123456";

  static locators = Locators.Login

  static visit() {
    cy.visit(this.url);
  }

  static enterEmail() {
    cy.get(this.locators.email).type(this.email)
  }

  static enterPassword() {
    cy.get(this.locators.password).type(this.password)
  }

  static pressEnter() {
    const { element, text } = this.locators.enter
    cy.get(element).contains(text).click()
  }

  static login(){
    this.visit()
    this.enterEmail()
    this.enterPassword()
    this.pressEnter()
  }

  static checkForHomePage() {
    cy.contains('Bem vindo').should('exist')
  }
}