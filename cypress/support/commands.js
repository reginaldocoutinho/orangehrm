Cypress.Commands.add('login', (username = 'Admin', password = 'admin123') => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
  cy.get('.oxd-button').click()
})

Cypress.Commands.add('pathPunch', () => {
  cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  cy.get(':nth-child(4) > .oxd-main-menu-item').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()

})

Cypress.Commands.add('punchIn', () => {
  cy.pathPunch()
  cy.get(':nth-child(4) > .oxd-main-menu-item').click()
  cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
  cy.get('.oxd-date-input > .oxd-input').clear()
  cy.get('.oxd-date-input > .oxd-input').type('2025-25-09')
  cy.get('.oxd-time-input > .oxd-input').clear()
  cy.get('.oxd-time-input > .oxd-input').type('01:00 PM')
  cy.get('.orangehrm-card-container').click()
  cy.get('.oxd-textarea').focus()
  cy.get('.oxd-textarea').type('Teste de apontamento de entrada 09/21/2025')
  cy.get('.oxd-button').click()
  cy.wait(5000)
})