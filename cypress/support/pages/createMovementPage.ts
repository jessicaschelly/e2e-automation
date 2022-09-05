import Locators from "../locators"

export default class CreateMovementPage {
  static locators = Locators.CreateMovement

  static goToCreateMovement() {
    const { element, text } = this.locators.createMovement
    cy.get(element).contains(text).click()

    cy.url().should('include', '/movimentacao')
  }

  static fillInRequiredFields() {
    cy.get(this.locators.type).select('Despesa')
    cy.get(this.locators.transactionDate).type('04/08/2022')
    cy.get(this.locators.paymentDate).type('05/08/2022')
    cy.get(this.locators.description).type('Payment description')
    cy.get(this.locators.interested).type('Jessica')
    cy.get(this.locators.value).type('100')
    cy.get(this.locators.account).select('Account')

    const { element, text } = this.locators.save
    cy.get(element).contains(text).click()
  }

  static validateSucessMessage() {
    cy.contains('Movimentação adicionada com sucesso!').should('exist')
  }
}
